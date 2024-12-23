import { Box, Grid, Stack } from "@mui/material";
import { Helmet } from "react-helmet";
import AuditTable from "../../../components/dashboard/AuditTable";


export default function Audits() {
  return (
    <>
      <Box bgcolor="#000">
        <Helmet>
          <title>Audits</title>
        </Helmet>
        <Stack spacing={5}>
          <AuditTable />
        </Stack>
      </Box>
    </>
  );
}




