import { Box, Grid, IconButton, Stack } from "@mui/material";
import Text from "../../../components/Text";
import { Helmet } from "react-helmet";
import { setUser } from "../../../redux/UserReducer";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import PaymentTable from "../../../components/management/PaymentTable";
import QuestionnaireForm from "../../../components/management/QuestionnaireForm";

export default function Questionnaire() {
  return (
    <>
      <Box bgcolor="#000">
        <Helmet>
          <title>Questionnaire</title>
        </Helmet>
        <Stack spacing={5}>
          <Overview />
          <QuestionnaireForm />
        </Stack>
      </Box>
    </>
  );
}

function Overview() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.details);
  const [isUpgrading, setIsUpgrading] = useState(false);

  return (
    <>
      <Box>
        <Text color="#fff" fs="36px" fw="700">
          Questionnaire Configuration
        </Text>
      </Box>
    </>
  );
}
