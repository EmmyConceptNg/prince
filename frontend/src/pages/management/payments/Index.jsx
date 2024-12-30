import { Box, Grid, IconButton, Stack } from "@mui/material";
import Text from "../../../components/Text";
import { Helmet } from "react-helmet";
import { setUser } from "../../../redux/UserReducer";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { ArrowDownward, ArrowUpward, MoreVert } from "@mui/icons-material";
import CompanyTable from "../../../components/management/CompanyTable";
import PaymentTable from "../../../components/management/PaymentTable";

export default function Payments() {
  return (
    <>
      <Box bgcolor="#000">
        <Helmet>
          <title>Payments</title>
        </Helmet>
        <Stack spacing={5}>
          <Overview />
          <PaymentTable />
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
          Let’s see users’ subscriptions!
        </Text>
        <Text color="#FFFFFFB2" fs="16px" fw="400">
          Here you can see all the users in the system and check statuses of
          their Paid Subscription Plan
        </Text>
      </Box>
      <Stack direction={{ md: "row", xs: "column" }} spacing={2}>
        <Box component="img" src="/svgs/IncomeGraphTemp.svg" sx={{ flexGrow : 1, height : '100%' }} />
        <Box component="img" src="/svgs/EarningGraph.svg" sx={{ flexGrow : 1, height : '100%' }} />
      </Stack>
    </>
  );
}
