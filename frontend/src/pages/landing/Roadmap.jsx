import { Box, Stack } from "@mui/material";
import Text from "../../components/Text";
import Lead from "./Lead";

export default function Roadmap() {
  return (
    <Box
      sx={{
        background: {
          lg: "url('/svgs/Roadmap-Bg.png') #000 center center / cover no-repeat",
          md: "url('/svgs/Roadmap-Bg.png') #000 top center / cover no-repeat",
          xs: "url('/svgs/Roadmap-Bg.png') #000 bottom center / cover no-repeat",
        },
        heigth: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pt: { md: 30, xs: 0 },
        px: 2,
      }}
    >
      <Box mx={{ md: "200px", xs: 2 }}>
        <Text
          color="#fff"
          ff="KyivTypeSans"
          fw="700"
          fs={{ md: "32px", lg: "32px", sm: "30px", xs: "20px" }}
          sx={{
            textAlign: {
              lg: "start",
              md: "start",
              sm: "center",
              xs: "center",
            },
          }}
        >
          Welcome to CertRiddle!
          <p style={{ marginTop: "0px" }}>
            where we{" "}
            <span style={{ color: "#2DDB81" }}>
              simplify the complexities of security certifications and
              compliance.
            </span>
          </p>
          <Box disply="flex" pr={{ xs: 0, md: "300px", lg: '"550px"' }}>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "400",
                fontFamily: "Inter",
              }}
            >
              Imagine a future where your startup is not just protected from
              online threats but also thrives by unlocking new business
              opportunities with ease. At CertRiddle, we turn the daunting task
              of navigating security certifications into a seamless journey. Say
              goodbye to the puzzle, and let us guide you confidently through
              the labyrinth of compliance, so you can focus on what truly
              matters—growing your business.
            </p>
          </Box>
        </Text>

        <Text
          color="#fff"
          ff="KyivTypeSans"
          fw="700"
          fs={{ md: "44px", lg: "44px", sm: "30px", xs: "20px" }}
          sx={{
            mt: 20,
            textAlign: {
              lg: "center",
              md: "center",
              sm: "center",
              xs: "center",
            },
          }}
        >
          The <span style={{ color: "#2DDB81" }}>Roadmap</span>
        </Text>
      </Box>
      <Lead />
    </Box>
  );
}
