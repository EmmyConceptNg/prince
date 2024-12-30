import { Box, Stack } from "@mui/material";
import { Helmet } from "react-helmet";
import FeedbackTable from "../../../components/management/FeedbackTable";

export default function Feedback() {
  return (
    <>
      <Box bgcolor="#000">
        <Helmet>
          <title>Feedback</title>
        </Helmet>
        <Stack spacing={6}>
          <FeedbackTable />
        </Stack>
      </Box>
    </>
  );
}
