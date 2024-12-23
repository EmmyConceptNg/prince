import { Box, Grid, Stack } from "@mui/material";
import { Helmet } from "react-helmet";
import BusinessTable from "../../../components/dashboard/BusinessTable";


export default function Business() {
  return (
    <>
      <Box bgcolor="#000">
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <Stack spacing={5}>
          <BusinessTable />
        </Stack>
      </Box>
    </>
  );
}




