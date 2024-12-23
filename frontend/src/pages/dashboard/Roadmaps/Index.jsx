import { Box, Divider, Grid, Stack } from "@mui/material";
import Text from "../../../components/Text";
import EyeIcon from "../../../../public/svgs/EyeIcon";
import { Type2 } from "./Type2";
import { NIST } from "./NIST";
import { FedRamp } from "./FedRamp";

export default function Roadmaps() {
  return (
    <Stack spacing={7}>
      <Header />
      <Compliance />
      <Divider sx={{ backgroundColor: "#FFFFFF33"}}/>
      <Type2 />
      <Divider sx={{ backgroundColor: "#FFFFFF33"}}/>
      <NIST />
      <Divider sx={{ backgroundColor: "#FFFFFF33"}}/>
      <FedRamp />
    </Stack>
  );
}

const results = [
  {
    question: "SOC 2 Type 2",
    answer:
      "Brief description text is here for now. Brief description text is here for now.Brief description text is here for now.Brief description text is here for now. Brief description text is here for now. Brief description text is here for now. Brief description text is here for now.",
  },
  {
    question: "ISO27018",
    answer:
      "Brief description text is here for now. Brief description text is here for now.Brief description text is here for now.Brief description text is here for now. Brief description text is here for now. Brief description text is here for now. Brief description text is here for now.",
  },
  {
    question: "FedRAMP",
    answer:
      "Brief description text is here for now. Brief description text is here for now.Brief description text is here for now.Brief description text is here for now. Brief description text is here for now. Brief description text is here for now. Brief description text is here for now.",
  },
];

function Compliance() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          width="49px"
          height="49px"
          bgcolor="#2DDB81"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="100%"
        >
          <Text fs="18px" fw="600" color="#fff" textAlign="center">
            3
          </Text>
        </Box>
        <Text fs="32px" fw="700" color="#fff">
          Certifications and Compliance Frameworks for your Business
        </Text>
      </Box>
      <Grid container spacing={{ md: 2, xs: 0 }}>
        {results.map(({ question, answer }, index) => (
          <Grid item md={4} sm={12} lg={4} key={index}>
            <Box
              sx={{
                bgcolor: "#0C0E0D",
                border: "1px solid #10281B",
                borderRadius: "10px",
              }}
              p={{ md: 3, xs: 1 }}
            >
              <Stack direction="row" justifyContent="space-between" mb={5}>
                <Text
                  color="#fff"
                  fw="700"
                  fs="20px"
                  sx={{
                    mb: 0,
                    textAlign: "left",
                  }}
                >
                  {question}
                </Text>
                <Box>
                  <EyeIcon />
                </Box>
              </Stack>
              <Text
                color="#fff"
                fw="400"
                fs="16px"
                sx={{
                  mb: 0,
                  textAlign: "left",
                }}
              >
                {answer}
              </Text>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}





function Header() {
  return (
    <Box
      display="flex"
      flexDirection={{ md: "row", xs: "column" }}
      justifyContent="space-between"
    >
      <Text fs="32px" fw="700" sx={{ color: "#fff" }}>
        The Roadmap
      </Text>
    </Box>
  );
}
