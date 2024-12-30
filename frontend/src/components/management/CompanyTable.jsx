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
  Stack,
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
import FilterIcon from "../../../public/svgs/FilterIcon";
import { Cancel } from "@mui/icons-material";

const data = [
  {
    name: "Company Name",
    quantity: 12,
    businessName:'Business Name',
    about: "Short description about business",
    status: "Not Started",
  },
  {
    name: "Company Name",
    quantity: 12,
    businessName:'Business Name',
    about: "Short description about business",
    status: "In progress",
  },
  {
    name: "Company Name",
    quantity: 12,
    businessName:'Business Name',
    about: "Short description about business",
    status: "Completed",
  },
  {
    name: "Company Name",
    quantity: 12,
    businessName:'Business Name',
    about: "Short description about business",
    status: "Not Started",
  },
  {
    name: "Company Name",
    quantity: 12,
    businessName:'Business Name',
    about: "Short description about business",
    status: "In progress",
  },
  {
    name: "Company Name",
    quantity: 12,
    businessName:'Business Name',
    about: "Short description about business",
    status: "Completed",
  },
];

function CompanyTable(props) {
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
                {[
                  "Business Name",
                  "Certification Status",
                  "Business Quantity",
                  "About",
                  "Actions",
                ].map((item) => (
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
                ))}
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
                      />
                      {row.name}
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
                          border:
                            row.status.toLowerCase() == "not started"
                              ? "1px solid #FA5353"
                              : row.status.toLowerCase() == "completed"
                              ? "1px solid #2DDB81"
                              : row.status.toLowerCase() == "in progress"
                              ? "1px solid #FA8F53"
                              : null,
                          color:
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
                        sx={{ display: "flex", gap: 2, alignItems: "center" }}
                      >
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                          {Array(4)
                            .fill()
                            .map((item, index) => (
                              <Avatar
                                key={index}
                                sx={{
                                  background: "#010403",
                                  border: "1px solid #10281B",
                                  width: "40px",
                                  height: "40px",
                                  marginLeft: index !== 0 ? "-30px" : "0",
                                }}
                              >
                                <SuitcaseIcon />
                              </Avatar>
                            ))}
                        </Box>
                        {row.quantity}
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
                      <Box>
                        <Text fs="14px" fw="400" color="#fff">
                          {row.businessName}
                        </Text>
                        <Text fs="14px" fw="400" color="#FFFFFFB2">
                          {row.about}
                        </Text>
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
                        <EyeIcon />
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
    <Box
      display="flex"
      flexDirection={{ md: "row", xs: "column" }}
      justifyContent="space-between"
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Button
          sx={{ backgroundColor: "#151B18" }}
          height="40px"
        >
          <Box display="flex" alignItems="center" gap={2}>
            <span style={{ color: "#9AE1BC" }}>All time</span>
            <Cancel sx={{ color: "#9AE1BC" }} />
          </Box>
        </Button>
        <Button
          sx={{ backgroundColor: "#151B18" }}
          height="40px"
          width="200px"
        >
          <Box display="flex" alignItems="center" gap={2}>
            <span style={{ color: "#9AE1BC" }}>10+ Businesses</span>
            <Cancel sx={{ color: "#9AE1BC" }} />
          </Box>
        </Button>
        <Button
          color="#10281B"
          variant="outlined"
          height="40px"
          dropdown
          dropdownItems={[
            {
              text: "All time",
              onClick: () => {},
            },
            {
              text: "All time",
              onClick: () => {},
            },
          ]}
        >
          <Box display="flex" alignItems="center" gap={2}>
            <FilterIcon />
            <span style={{ color: "#9AE1BC" }}>More filters</span>
          </Box>
        </Button>
      </Stack>

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

CompanyTable.propTypes = {};

export default CompanyTable;
