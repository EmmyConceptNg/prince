import { Box, Stack } from "@mui/material";
import { Helmet } from "react-helmet";
import ManagementReportsTable from "../../../components/dashboard/ManagementReportsTable";
import QuestionnaireAnalytics from "../../../components/dashboard/QuestionnaireAnalytics";


export default function Reports() {
  return (
    <>
      <Box bgcolor="#000">
        <Helmet>
          <title>Resources</title>
        </Helmet>
        <Stack spacing={6}>
          <ManagementReportsTable />
          <QuestionnaireAnalytics />
        </Stack>
      </Box>
    </>
  );
}




