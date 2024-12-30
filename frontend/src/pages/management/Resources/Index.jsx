import { Box, Stack } from "@mui/material";
import { Helmet } from "react-helmet";
import DocumentsTable from "../../../components/dashboard/DocumentsTable";
import ContentsTable from "../../../components/dashboard/ContentsTable";


export default function Resources() {
  return (
    <>
      <Box bgcolor="#000">
        <Helmet>
          <title>Resources</title>
        </Helmet>
        <Stack spacing={6}>
          <DocumentsTable />
          <ContentsTable />
        </Stack>
      </Box>
    </>
  );
}




