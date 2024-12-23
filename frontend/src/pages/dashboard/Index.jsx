import { Box, Grid, Stack } from "@mui/material";
import Text from "../../components/Text";


import { Helmet } from "react-helmet";


import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Button from "../../components/Button";
import TempChart from "../../../public/svgs/TempChart";
import RoadmapTable from "../../components/dashboard/RoadmapTable";
import NotificationTable from "../../components/dashboard/NotificationTable";


export default function Dashboard() {
  return (
    <>
      <Box bgcolor="#000">
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <Stack spacing={5}>
          <Overview />
          <RoadmapTable />
          <NotificationTable />
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
      <Grid container spacing={2} width="100%"> 
        <Grid item md={8} xs={12} sx={{ mb: "20px" }}>
          <Box
            sx={{
              background: 'url("/svgs/bg3.svg") #0C0E0D center right no-repeat',
              height: { md: "239px", xs: "100%" },
              width: "100%",
              borderRadius: "10px",
              border: "1px solid #10281B",
              display: "flex",
              flexDirection: "column",
              padding: { md: 4, xs: 2 },
              gap: 3,
            }}
          >
            <Box>
              <Text color="#fff" fs="36px" fw="700">
                Hi {user?.fullName}!
              </Text>
              <Text color="#FFFFFFBF" fs="18px" fw="500">
                Let’s check up certifications & compliance frameworks for your
                business.
              </Text>
            </Box>
            <Button variant="contained" width="194px">
              <span style={{ color: "#333333" }}>Generate Roadmap</span>
            </Button>
          </Box>
        </Grid>
        <Grid item md={4} xs={12} sx={{ mb: "20px" }}>
          <Box
            sx={{
              background: " #0C0E0D no-repeat",
              height: { md: "239px", xs: "100%" },
              width: "100%",
              borderRadius: "10px",
              border: "1px solid #10281B",
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              padding: { md: 4, xs: 2 },
              gap: 3,
            }}
          >
            <TempChart />
            <Stack spacing={2}>
              <Box display="flex" alignItems="flex-start" gap={1}>
                <Box
                  bgcolor="#2DDB81"
                  border="2.19px solid #F5F5F5"
                  height="8.74px"
                  width="8.74px"
                  borderRadius="3.74px"
                  mt="5px"
                />
                <Box>
                  <Text color="#FFFFFF" fs="14px" fw="500">
                    Completed Certifications:
                  </Text>
                  <Text color="#FFFFFF" fs="20px" fw="600">
                    136
                  </Text>
                </Box>
              </Box>
              <Box display="flex" alignItems="flex-start" gap={1}>
                <Box
                  bgcolor="#1D4C34"
                  border="2.19px solid #F5F5F5"
                  height="8.74px"
                  width="8.74px"
                  borderRadius="3.74px"
                  mt="5px"
                />
                <Box>
                  <Text color="#FFFFFF" fs="14px" fw="500">
                    In-progress Certifications:
                  </Text>
                  <Text color="#FFFFFF" fs="20px" fw="600">
                    26
                  </Text>
                </Box>
              </Box>
              <Box display="flex" alignItems="flex-start" gap={1}>
                <Box
                  bgcolor="#449D88"
                  border="2.19px solid #F5F5F5"
                  height="8.74px"
                  width="8.74px"
                  borderRadius="3.74px"
                  mt="5px"
                />
                <Box>
                  <Text color="#FFFFFF" fs="14px" fw="500">
                    Not Started Certifications:
                  </Text>
                  <Text color="#FFFFFF" fs="20px" fw="600">
                    26
                  </Text>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}


