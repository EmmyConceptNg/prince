import { Box, Grid, IconButton, Stack } from "@mui/material";
import Text from "../../components/Text";
import { Helmet } from "react-helmet";
import { setUser } from "../../redux/UserReducer";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import SubscriptionTable from "./SubscriptionTable";
import { ArrowDownward, ArrowUpward, MoreVert } from "@mui/icons-material";
import CompanyTable from "../../components/management/CompanyTable";

export default function Dashboard() {
  return (
    <>
      <Box bgcolor="#000">
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <Stack spacing={5}>
          <Overview />
          <CompanyTable />
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
          Welcome back, {user?.fullName}!
        </Text>
        <Text color="#FFFFFFB2" fs="16px" fw="400">
          Track, manage and forecast your users’ certifications and compliance
          frameworks.
        </Text>
      </Box>
      <Stack direction={{ md: "row", xs: "column" }} spacing={2}>
        {[
          {
            title: "Total Users",
            amount: 2420,
            positive: true,
            value: "40%",
            chart: "/svgs/UpwardTrend.svg",
          },
          {
            title: "Roadmaps Generated",
            amount: 1210,
            positive: false,
            value: "10%",
            chart: "/svgs/DownwardTrend.svg",
          },
          {
            title: "New Businesses",
            amount: 316,
            positive: true,
            value: "20%",
            chart: "/svgs/UpwardTrend.svg",
          },
        ].map((item) => (
          <Box
            key={item.title}
            sx={{
              bgcolor: "#0C0E0D",
              border: "1px solid #10281B",
              borderRadius: "10px",
              flexGrow: 1,
            }}
            p={{ md: 3, xs: 1 }}
          >
            <Stack direction="row" justifyContent="space-between">
              <Text color="#FFFFFF" fs="16px" fw="500">
                {item.title}
              </Text>
              <IconButton>
                <MoreVert sx={{ color: "#fff" }} />
              </IconButton>
            </Stack>
            <Stack direction="row" justifyContent="space-between" mt={2}>
              <Stack spacing={2}>
                <Text color="#FFFFFF" fs="36px" fw="600">
                  {item.amount}
                </Text>
                <Box display="flex" gap="1px" alignitems="center">
                  {item.positive ? (
                    <ArrowUpward sx={{ color: "#12B76A" }} />
                  ) : (
                    <ArrowDownward sx={{ color: "#F04438" }} />
                  )}
                  <Text
                    color={item.positive ? "#027A48" : "#B42318"}
                    fs="14px"
                    fw="500"
                  >
                    {`${item.value} vs last month`}
                  </Text>
                </Box>
              </Stack>
              <Box component="img" src={item.chart} />
            </Stack>
          </Box>
        ))}
      </Stack>
    </>
  );
}
