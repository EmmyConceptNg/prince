import { Box, Stack } from "@mui/material";
import { Helmet } from "react-helmet";
import SettingsForm from "../../../components/dashboard/SettingsForm";


export default function Reports() {
  return (
    <>
      <Box bgcolor="#000">
        <Helmet>
          <title>Resources</title>
        </Helmet>
        <Stack spacing={6}>
          <SettingsForm />
        </Stack>
      </Box>
    </>
  );
}




