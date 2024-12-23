import { Box } from "@mui/material";
import React from "react";
import Ask from "../../home/pricing/Ask";
import Results from "../../home/pricing/Results";
import Question from "../../home/pricing/Question";
import How from "../../home/howItWorks/How";

export default function KnowledgeBase() {
  return (
    <Box>
      <Ask />
      <Results />
      <How />
    </Box>
  );
}
