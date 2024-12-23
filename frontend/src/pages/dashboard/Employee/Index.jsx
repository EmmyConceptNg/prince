import { Box, Grid, Stack } from "@mui/material";
import { Helmet } from "react-helmet";
import EmployeeTable from "../../../components/dashboard/EmployeeTable";


export default function Employee() {
  return (
    <>
      <Box bgcolor="#000">
        <Helmet>
          <title>Employee</title>
        </Helmet>
        <Stack spacing={5}>
          <EmployeeTable />
        </Stack>
      </Box>
    </>
  );
}




