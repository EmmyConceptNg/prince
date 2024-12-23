import { Box, Grid, Stack } from "@mui/material";
import { Helmet } from "react-helmet";
import ReportsTable from "../../../components/dashboard/ReportsTable";

export default function Reports() {
  return (
    <>
      <Box bgcolor="#000">
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <Stack spacing={5}>
          <ReportsTable />
        </Stack>
      </Box>
    </>
  );
}
