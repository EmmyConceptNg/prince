import { Box, Divider, Grid, Stack } from "@mui/material";
import Text from "../../../components/Text";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Button from "../../../components/Button";
import TempChart from "../../../../public/svgs/TempChart";
import PricesCard from "../../home/pricing/PricesCard";
import StackIcon from "../../../../public/svgs/StackIcon";
import CheckIcon from "../../../../public/svgs/CheckIcon";
import CheckEmptyIcon from "../../../../public/svgs/CheckEmptyIcon";
import PlusIcon from "../../../../public/svgs/PlusIcon";


export default function Subscription() {
  return (
    <>
      <Box bgcolor="#000">
        <Helmet>
          <title>Subscription</title>
        </Helmet>
        <Stack spacing={5}>
          <Overview />
          <PricesCard free={false} auth={true} current="0" />
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
              background: "#0C0E0D center right no-repeat",
              height: { md: "300px", xs: "100%" },
              width: "100%",
              borderRadius: "10px",
              border: "1px solid #10281B",
              display: "flex",
              flexDirection: "column",
              padding: { md: 4, xs: 2 },
              gap: 3,
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" gap={2} alignItems="center">
                <StackIcon />
                <Text color="#2DDB81" fs="16px" fw="600">
                  Started Plan
                </Text>
              </Box>
              <Box>
                <CheckIcon />
              </Box>
            </Box>
            <Divider sx={{ background: "#10281B" }} />
            <Box>
              <Text color="#FFFFFF" fs="32px" fw="600">
                $29{" "}
                <span
                  style={{
                    color: "#FFFFFF73",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  per month
                </span>
              </Text>
              <Text color="#9AE1BC" fs="16px" fw="400">
                Includes Full access to the personalized questionnaire,
                Customized certification roadmap, Access to standard compliance
                checklists and templates and Email support
              </Text>
              <Button width="264px" variant="contained" sx={{ mt: 2 }}>
                <span style={{ color: "#333333" }}>Upgrade Subscription</span>
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item md={4} xs={12} sx={{ mb: "20px" }}>
          {[
            {
              image: "Visa-img.svg",
              name: "Visa",
              last4Digit: "1234",
              expiry: "06/2024",
              default: true,
            },
            {
              image: "Mastercard-img.svg",
              name: "Mastercard",
              last4Digit: "1234",
              expiry: "06/2024",
              default: false,
            },
          ].map((item) => (
            <Box
              key={item}
              sx={{
                background: " #0C0E0D no-repeat",
                mb: 2,
                height: "104px",
                width: "100%",
                borderRadius: "10px",
                border: "1px solid #10281B",
                display: "flex",
                flexDirection: { md: "row", xs: "column" },
                px: { md: 4, xs: 2 },
                py: 2,
                gap: 3,
              }}
            >
              <Box display="flex" justifyContent="space-between" width="100%">
                <Box display="flex" gap={2}>
                  <Box>
                    <Box
                      component="img"
                      src={`/svgs/${item.image}`}
                      width="46px"
                    />
                  </Box>
                  <Box>
                    <Text color="#FFFFFF" fs="14px" fw="500">
                      {`${item.name} ending in ${item.last4Digit}`}
                    </Text>
                    <Text color="#FFFFFF" fs="14px" fw="500">
                      {`Expiry ${item.expiry}`}
                    </Text>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      {item.default ? (
                        <Button width="49px" color="#2DDB81">
                          Default
                        </Button>
                      ) : (
                        <Button color="#2DDB81" width="94px">
                          Set as default
                        </Button>
                      )}
                      <Button color="#2DDB81" width="27px">
                        Edit
                      </Button>
                    </Stack>
                  </Box>
                </Box>
                <Box>{item.default ? <CheckIcon /> : <CheckEmptyIcon />}</Box>
              </Box>
            </Box>
          ))}
          <Box
            sx={{
              mb: 2,
              width: "100%",
              px: { md: 4, xs: 2 },
              py: 2,
            }}
          >
            <Button
              height="30px"
              width="200px"
              type="button"
              color="#2DDB81"
              startIcon={<PlusIcon sx={{ color: "#2DDB81" }} />}
            >
              Add new payment method
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}


