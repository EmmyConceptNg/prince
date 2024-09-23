import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button"; // For the copy button
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { Tooltip } from "@mui/material"; // Optional: Tooltip for the button
import ContentCopyIcon from "@mui/icons-material/ContentCopy"; // Optional: Icon for the button
import moment from 'moment'
import { notify } from "../../utils/Index";
import { ToastContainer } from "react-toastify";

const columns = [
  { id: "sn", label: "S/N", minWidth: 10 },
  { id: "email", label: "Email Address", minWidth: 170 },
  { id: "date_added", label: "Date Added", minWidth: 100 },
  { id: "action", label: "Action", minWidth: 100, align: "right" },
];

export default function SubscriptionTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [emailList, setEmailList] = useState([]);

  useEffect(() => {
    axios
      .get("/api/auth/get-emails")
      .then((response) => setEmailList(response.data.users))
      .catch((error) => console.error("Error fetching emails:", error));
  }, []);

  const handleCopy = (email) => {
    navigator.clipboard.writeText(email).then(() => {
      notify(`Copied: ${email}`, 'success');
    });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead sx={{ bgcolor: "gray" }}>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, fontWeight: "900" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {emailList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell sx={{}}>{index + 1}</TableCell>
                    <TableCell sx={{}}>{row.email}</TableCell>
                    <TableCell sx={{}}>
                      {moment(row.createdAt).format("MMMM Do YYYY")}
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip title="Copy Email">
                        <Button
                          variant="outlined"
                          color="primary"
                          size="small"
                          onClick={() => handleCopy(row.email)}
                          startIcon={<ContentCopyIcon />}
                          sx={{ color: "black", borderColor: "#fff" }}
                        >
                          Copy
                        </Button>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          sx={{}}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={emailList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <ToastContainer />
    </>
  );
}
