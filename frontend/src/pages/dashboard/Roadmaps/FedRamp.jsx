import { Box, Divider, Grid, Stack } from "@mui/material";
import Text from "../../../components/Text";
import InfoIcon from "../../../../public/svgs/InfoIcon";
import PointersIcon from "../../../../public/svgs/PointersIcon";
import IdentifyAssets from "../../../../public/svgs/IdentifyAssets";
import GatherInfo from "../../../../public/svgs/GatherInfo";
import CategorizeRisk from "../../../../public/svgs/CategorizeRisk";
import CompareRisk from "../../../../public/svgs/CompareRisk";
import MakePlan from "../../../../public/svgs/makePlan";

const nists = [
  {
    icon: <IdentifyAssets />,
    title: "Step 1",
  },
  {
    icon: <GatherInfo />,
    title: "Step 2",
  },
  {
    icon: <CategorizeRisk />,
    title: "Step 3",
  },
  {
    icon: <CompareRisk />,
    title: "Step 4",
  },
];

export function FedRamp() {
  return (
    <>
      <Roadmap />
      <Details />
    </>
  );
}

function Roadmap() {
    return (
      <Stack spacing={3}>
        {/* Header */}
        <Box display="flex" gap={3} justifyContent="center" alignItems="center">
          <Box>
            <Text fs={{ md: "32px", xs: "22px" }} fw="700" color="#fff">
              Typical FedRAMP Timeline
            </Text>
          </Box>
          <Box>
            <InfoIcon />
          </Box>
        </Box>

        {/* Links */}
        <Box
          display="flex"
          gap={5}
          justifyContent="center"
          alignItems="center"
          flexDirection={{ md: "row", xs: "column" }}
        >
          <Text
            fs="14px"
            fw="500"
            color="#2DDB81"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
          >
            GRC Tools
          </Text>
          <Text
            fs="14px"
            fw="500"
            color="#2DDB81"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Internal Auditors
          </Text>
          <Text
            fs="14px"
            fw="500"
            color="#2DDB81"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Certification Bodies
          </Text>
        </Box>

        {/* Timeline Items */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { md: 5, xs: 3 },
          }}
        >
          {nists.map(({ icon, title }, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "flex-end",
                position: "relative",
                width: "100%", // Ensures consistent spacing
                zIndex: 999,
              }}
            >
              {/* Timeline Item */}
              <Box>{icon}</Box>
              <Text color="#fff" fw="700" fs="18px" sx={{ mb: 1 }}>
                {title}
              </Text>

              {/* Pointer */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: 2,
                  position: "relative",
                }}
              >
                <PointersIcon />
              </Box>
            </Box>
          ))}
          <Box
            sx={{
              position: "absolute",
              top: "85%",
              right: "50%",
              width: { md: "100%", xs: "80px" }, // Adjust for responsiveness
              height: "1px",
              backgroundImage:
                "linear-gradient(to right, #010403, #2BEE89, #020704)", // Gradient colors
              transform: "translateX(50%)",
              zIndex: 1, // Places it behind the pointer
            }}
          />
        </Box>
      </Stack>
    );
}





const details = [
  {
    subtext: "6-12 months evaluation perioud",
    heading: "Schedule Kickoff",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae erat dictum, venenatis lectus ac, eleifend quam.",
  },
  {
    subtext: "6-12 months evaluation perioud",
    heading: "Engage 3PAO",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae erat dictum, venenatis lectus ac, eleifend quam.",
  },
  {
    subtext: "6-12 months evaluation perioud",
    heading: "Target Readiness",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae erat dictum, venenatis lectus ac, eleifend quam.",
  },
  {
    subtext: "",
    heading: "Federal Deadline",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae erat dictum, venenatis lectus ac, eleifend quam.",
  },
];

function Details() {
  return (
    <>
      <Box display="flex" flexDirection={{ md: 'row', xs : 'column' }} gap={{ md: 2, xs: 0 }}>
        {details.map(({ subtext, heading, content }, index) => (
          
            <Stack spacing={2} key={index}
             
              p={{ md: 3, xs: 1 }}
            >
              
                <Text
                  color="#2DDB81"
                  fw="500"
                  fs="10px"
                  sx={{
                    mb: 0,
                    textAlign: "left",
                  }}
                >
                  {subtext}
                </Text>
                <Text
                  color="#fff"
                  fw="700"
                  fs="18px"
                  sx={{
                    mb: 0,
                    textAlign: "left",
                  }}
                >
                  {heading}
                </Text>
              
              <Text
                color="#FFFFFFA6"
                fw="500"
                fs="10px"
                sx={{
                  mb: 0,
                  textAlign: "left",
                }}
              >
                {content}
              </Text>
            </Stack>
          
        ))}
      </Box>
    </>
  );
}