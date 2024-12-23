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
import ListIcon from "../../../public/svgs/ListIcon";

const data = [
  {
    name: "Example Notification Title will be displayed here for now",
  },
  {
    name: "Example Notification Title will be displayed here for now",
  },
  {
    name: "Example Notification Title will be displayed here for now",
  },
  {
    name: "Example Notification Title will be displayed here for now",
  },
  {
    name: "Example Notification Title will be displayed here for now",
  },
  {
    name: "Example Notification Title will be displayed here for now",
  },
  {
    name: "Example Notification Title will be displayed here for now",
  },
  
];

function NotificationTable(props) {
  return (
    <>
      <Header />
      <Box
        sx={{
          bgcolor: "#0C0E0D",
          border: "1px solid #10281B",
          borderRadius: "10px",
        }}
        p={{ md: 3, xs: 1 }}
      >
        <TableX data={data} />
      </Box>
    </>
  );
}

const TableX = ({ data }) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  return (
    <TableContainer
      component={Paper}
      sx={{ bgcolor: "#0C0E0D", color: "#fff" }}
    >
      <Table>
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
                    <ListIcon />
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
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-end"
                    gap={2}
                  >
                    <EyeIcon />
                    <DeleteIcon />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
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
        NotificationTable
      </Text>

      <Box
        display="flex"
        flexDirection={{ md: "row", xs: "column" }}
        alignItems={{ md: "center", xs: "flex-start" }}
        justifyContent="flex-start"
        gap={2}
      >
        <SearchInput width="250px" height="45px" placeholder="Search" />
      </Box>
    </Box>
  );
}

NotificationTable.propTypes = {};

export default NotificationTable;
