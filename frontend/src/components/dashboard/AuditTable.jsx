import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Box,
  Avatar,
  AvatarGroup,
  Divider,
} from "@mui/material";
import { useState } from "react";
import Button from "../Button";
import SuitcaseIcon from "../../../public/svgs/SuitcaseIcon";
import ShieldIcon from "../../../public/svgs/ShieldIcon";
import EyeIcon from "../../../public/svgs/EyeIcon";
import DeleteIcon from "../../../public/svgs/DeleteIcon";
import EditIcon from "../../../public/svgs/EditIcon";
import Text from "../Text";
import SearchInput from "../Search";
import PlusIcon from "../../../public/svgs/PlusIcon";
import { MobilePagination, Pagination } from "../Pagination";
import AuditIcon from "../../../public/svgs/AuditIcon";
import { use } from "react";
import ViewModal from "../modals/Audits/ViewModal";

const data = [
  {
    name: "Audit Name",
    date: "20.06.2024",
    status: "Not Started",
  },
  {
    name: "Audit Name",
    date: "20.06.2024",
    status: "In progress",
  },
  {
    name: "Audit Name",
    date: "20.06.2024",
    status: "Completed",
  },
];

function AuditTable(props) {
  return (
    <>
      <Header />

      <TableX data={data} />
    </>
  );
}

const TableX = ({ data }) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;
  const [viewModal, setViewModal] = useState(false);

  return (
    <>
      <Box
        sx={{
          bgcolor: "#0C0E0D",
          border: "1px solid #10281B",
          borderRadius: "10px",
        }}
        p={{ md: 3, xs: 1 }}
      >
        <TableContainer
          component={Paper}
          sx={{ bgcolor: "#0C0E0D", color: "#fff" }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ borderBottom: "none" }}>
                {["Audit Name", "Audit Date", "Status", "Actions"].map(
                  (item) => (
                    <TableCell
                      sx={{
                        color: "#fff",
                        fontSize: "18px",
                        fontWeight: 500,
                        borderBottom: "none",
                      }}
                      key={item}
                    >
                      {item}
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={index} sx={{ borderBottom: "none" }}>
                    <TableCell
                      sx={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: 500,
                        borderBottom: "none",
                        display: "flex",
                        gap: 2,
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        sx={{
                          background: "#010403",
                          border: "1px solid #10281B",
                          width: "40px",
                          height: "40px",
                        }}
                      >
                        <AuditIcon />
                      </Avatar>
                      {row.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: 500,
                        borderBottom: "none",
                      }}
                    >
                      {row.date}
                    </TableCell>
                    <TableCell
                      sx={{
                        color:
                          row.status.toLowerCase() == "completed"
                            ? "#333333"
                            : "#fff",
                        fontSize: "12px",
                        fontWeight: 500,
                        borderBottom: "none",
                      }}
                    >
                      <Box
                        sx={{
                          height: "25px",
                          width: "85px",
                          padding: "5px 10px 5px 10px",
                          borderRadius: "60px",
                          display: "flex",
                          background:
                            row.status.toLowerCase() == "not started"
                              ? "#FA5353"
                              : row.status.toLowerCase() == "completed"
                              ? "#2DDB81"
                              : row.status.toLowerCase() == "in progress"
                              ? "#FA8F53"
                              : null,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {row.status}
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: 500,
                        borderBottom: "none",
                      }}
                    >
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-start"
                        gap={2}
                      >
                        <Box
                          sx={{ cursor: "pointer" }}
                          onClick={() => setViewModal(true)}
                        >
                          <EyeIcon />
                        </Box>
                        <EditIcon />
                        <DeleteIcon />
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box mt={8} display={{ md: "flex", xs: "none" }} width="100%">
        <Pagination />
      </Box>
      <Box
        mt={5}
        display={{ md: "none", xs: "flex" }}
        flexDirection="column"
        width="100%"
      >
        <MobilePagination />
      </Box>
      {viewModal && <ViewModal open={viewModal} setOpen={setViewModal} />}
    </>
  );
};

function Header() {
  return (
    <Box
      display="flex"
      flexDirection={{ md: "row", xs: "column" }}
      justifyContent="space-between"
    >
      <Text fs="32px" fw="700" sx={{ color: "#fff" }}>
        Internal Audits
      </Text>

      <Box
        display="flex"
        flexDirection={{ md: "row", xs: "column" }}
        alignItems={{ md: "center", xs: "flex-start" }}
        justifyContent="flex-start"
        gap={2}
      >
        <SearchInput width="250px" height="45px" placeholder="Search" />
        <Button
          width="180px"
          height="45px"
          type="button"
          startIcon={<PlusIcon />}
          to="/dashboard/audits/create"
          variant="contained"
        >
          <span style={{ color: "#333333" }}>Schedule Audit</span>
        </Button>
      </Box>
    </Box>
  );
}

AuditTable.propTypes = {};

export default AuditTable;
