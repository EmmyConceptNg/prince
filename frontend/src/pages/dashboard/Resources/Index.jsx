import { Box, Grid, Stack } from "@mui/material";
import { Helmet } from "react-helmet";
import DocumentsTable from "../../../components/dashboard/DocumentsTable";
import TrainingTable from "../../../components/dashboard/TrainingTable";
import WebinarsTable from "../../../components/dashboard/WebinarsTable";
import ArticleTable from "../../../components/dashboard/ArticleTable";


export default function Resources() {
  return (
    <>
      <Box bgcolor="#000">
        <Helmet>
          <title>Resources</title>
        </Helmet>
        <Stack spacing={6}>
          <DocumentsTable />
          <TrainingTable />
          <WebinarsTable />
          <ArticleTable />
        </Stack>
      </Box>
    </>
  );
}




