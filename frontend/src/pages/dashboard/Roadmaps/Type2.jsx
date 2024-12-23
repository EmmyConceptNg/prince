import { Box, Divider, Grid, Stack } from "@mui/material";
import Text from "../../../components/Text";
import InfoIcon from "../../../../public/svgs/InfoIcon";
import Refresh from "../../../../public/svgs/Refresh";
import Audit from "../../../../public/svgs/Audit";
import PointersIcon from "../../../../public/svgs/PointersIcon";

const type2s = [
  {
    icon: <Box component="img" src="/svgs/StartClock.svg" />,
    title: "Start the Clock",
  },
  {
    icon: <Audit />,
    title: "SOC2 Type 2 Audit",
  },
  {
    icon: <Refresh />,
    title: "Annual Refresh",
  },
];

export function Type2() {
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
          <Text fs={{ md:"32px", xs :"22px" }} fw="700" color="#fff">
            Typical SOC 2 Type 2 Timeline
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
        {type2s.map(({ icon, title }, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              justifyContent: 'flex-end',
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
    )
}





const details = [
  {
    subtext: "1-3 Months",
    heading: "Prepare",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae erat dictum, venenatis lectus ac, eleifend quam.",
  },
  {
    subtext: "Optional",
    heading: "SOC 2 Type 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae erat dictum, venenatis lectus ac, eleifend quam.",
  },
  {
    subtext: "2-3 weeks before audit",
    heading: "Doc Prep",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae erat dictum, venenatis lectus ac, eleifend quam.",
  },
  {
    subtext: "2 days",
    heading: "On-site Audit",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae erat dictum, venenatis lectus ac, eleifend quam.",
  },
  {
    subtext: "2-3 weeks after audit",
    heading: "Final report",
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