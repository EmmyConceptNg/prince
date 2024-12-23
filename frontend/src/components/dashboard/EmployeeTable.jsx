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
import UserIcon from "../../../public/svgs/UserIcon";
import UserEditIcon from "../../../public/svgs/UserEditIcon";
import UserDeleteIcon from "../../../public/svgs/UserDeleteIcon";

const data = [
  {
    name: "Paul4231",
    email: "pul@email.com",
    jobTitle: 'Marketer',
    memberSince: "20.06.2024",
    status: "Not Started",
  },
  {
    name: "Paul4231",
    email: "pul@email.com",
    jobTitle: 'Marketer',
    memberSince: "20.06.2024",
    status: "Not Started",
  },
  {
    name: "Paul4231",
    email: "pul@email.com",
    jobTitle: 'Marketer',
    memberSince: "20.06.2024",
    status: "Not Started",
  },
  {
    name: "Paul4231",
    email: "pul@email.com",
    jobTitle: 'Marketer',
    memberSince: "20.06.2024",
    status: "Not Started",
  },
  {
    name: "Paul4231",
    email: "pul@email.com",
    jobTitle: 'Marketer',
    memberSince: "20.06.2024",
    status: "Not Started",
  },
  {
    name: "Paul4231",
    email: "pul@email.com",
    jobTitle: 'Marketer',
    memberSince: "20.06.2024",
    status: "Not Started",
  },
  {
    name: "Paul4231",
    email: "pul@email.com",
    jobTitle: 'Marketer',
    memberSince: "20.06.2024",
    status: "Not Started",
  },
  {
    name: "Paul4231",
    email: "pul@email.com",
    jobTitle: 'Marketer',
    memberSince: "20.06.2024",
    status: "Not Started",
  },
];

function EmployeeTable(props) {
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
                {["User Name", "Member Since", "Job Title", "Actions"].map(
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
                        <UserIcon />
                      </Avatar>
                      <Box>
                        {row.name}
                        <Box sx={{ color: "#9AE1BC" }}>{row.email}</Box>
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
                      {row.memberSince}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: 500,
                        borderBottom: "none",
                      }}
                    >
                      {row.jobTitle}
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
                        <UserDeleteIcon />
                        <UserEditIcon />
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box mt={8} display={{ md: "flex", xs: "none" }}>
        <Pagination />
      </Box>
      <Box mt={5} display={{ md: "none", xs: "flex" }} flexDirection="column">
        <Divider sx={{ bgcolor: "#fff" }} />
        <MobilePagination />
      </Box>
    </>
  );
};

function Header() {
  return (
    <Box display="flex" flexDirection={{md: 'row', xs : 'column'}} justifyContent="space-between">
      <Text fs="32px" fw="700" sx={{ color: "#fff" }}>
        My Businesses
      </Text>

      <Box
        display="flex"
        flexDirection ={{ md : 'row', xs : 'column' }}
        alignItems={{md:"center", xs : 'flex-start'}}
        justifyContent="flex-start"
        gap={2}
      >
        <SearchInput width="250px" height="45px" placeholder="Search" />
        <Button
          width="180px"
          height="45px"
          type="button"
          to="/dashboard/app"
          variant="contained"
        >
          <span style={{ color: "#333333" }}>
          Switch to Individual
          </span>
        </Button>
      </Box>
    </Box>
  );
}

EmployeeTable.propTypes = {};

export default EmployeeTable;
