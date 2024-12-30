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
import FilterIcon from "../../../public/svgs/FilterIcon";

const data = [
  {
    number_of_active_users: 190,
    breakdown_of_activities: "example",
    time_spent: "30 hours",
    highest_traffic: "example",
    identification: "example",
    insights: "example",
  },
  {
    number_of_active_users: 190,
    breakdown_of_activities: "example",
    time_spent: "30 hours",
    highest_traffic: "example",
    identification: "example",
    insights: "example",
  },
  {
    number_of_active_users: 190,
    breakdown_of_activities: "example",
    time_spent: "30 hours",
    highest_traffic: "example",
    identification: "example",
    insights: "example",
  },
  {
    number_of_active_users: 190,
    breakdown_of_activities: "example",
    time_spent: "30 hours",
    highest_traffic: "example",
    identification: "example",
    insights: "example",
  },
  {
    number_of_active_users: 190,
    breakdown_of_activities: "example",
    time_spent: "30 hours",
    highest_traffic: "example",
    identification: "example",
    insights: "example",
  },
  {
    number_of_active_users: 190,
    breakdown_of_activities: "example",
    time_spent: "30 hours",
    highest_traffic: "example",
    identification: "example",
    insights: "example",
  },
  {
    number_of_active_users: 190,
    breakdown_of_activities: "example",
    time_spent: "30 hours",
    highest_traffic: "example",
    identification: "example",
    insights: "example",
  },
  {
    number_of_active_users: 190,
    breakdown_of_activities: "example",
    time_spent: "30 hours",
    highest_traffic: "example",
    identification: "example",
    insights: "example",
  },
];

function QuestionnaireAnalytics(props) {
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
                  "Number of Response",
                  "Completion Rates",
                  "Analysis",
                  "Identification",
                  "User Feedback",
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
                      }}
                    >
                      {row.number_of_active_users}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: 500,
                        borderBottom: "none",
                      }}
                    >
                      {row.breakdown_of_activities}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: 500,
                        borderBottom: "none",
                      }}
                    >
                      {row.time_spent}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: 500,
                        borderBottom: "none",
                      }}
                    >
                      {row.highest_traffic}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: 500,
                        borderBottom: "none",
                      }}
                    >
                      {row.identification}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: 500,
                        borderBottom: "none",
                      }}
                    >
                      {row.insights}
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
    <>
      <Box
        display="flex"
        flexDirection={{ md: "row", xs: "column" }}
        justifyContent="space-between"
      >
        <Text fs="24px" fw="700" sx={{ color: "#fff" }}>
          Questionnaire Analytics
        </Text>

        <Box
          display="flex"
          flexDirection={{ md: "row", xs: "column" }}
          alignItems={{ md: "center", xs: "flex-start" }}
          justifyContent="flex-start"
          gap={2}
        >
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
              <span style={{ color: "#9AE1BC" }}>Filter</span>
            </Box>
          </Button>

          <SearchInput width="250px" height="45px" placeholder="Search" />
        </Box>
      </Box>
    </>
  );
}

QuestionnaireAnalytics.propTypes = {};

export default QuestionnaireAnalytics;
