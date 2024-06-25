import { Box, Stack } from "@mui/material";
import Text from "../../components/Text";

export default function Roadmap() {
  return (
    <Box
      sx={{
        background: {
          md: "url('/svgs/Roadmap-Bg.png') #000 center center / cover no-repeat",
          xs: "url('/svgs/Roadmap-Bg.png') #000 bottom center / cover no-repeat",
        },
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        pt: { md: 10, xs: 0 },
      }}
    >
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
          Making{" "}
          <span style={{ color: "#2DDB81" }}>
            Security Certifications & Compliance{" "}
          </span>
          Less of a Puzzle!
        </p>
      </Text>

      <Text
        color="#fff"
        fw="500"
        fs={{ md: "18px", lg: "18px", sm: "10px", xs: "10px" }}
        sx={{
          mb: "20px",
          textAlign: {
            lg: "start",
            md: "start",
            sm: "center",
            xs: "center",
          },
          mx: { lg: "310px", md: "200px", xs: "0px" },
        }}
      >
        In today's digital world, securing your startup or SMB against online
        threats while securing business opportunities has never been more
        critical. But let's face it, navigating the complex labyrinth of
        security certifications can feel like trying to solve a riddle wrapped
        in a mystery inside an enigma. That's where CertRiddle comes in.
      </Text>

      <Text
        color="#fff"
        ff="KyivTypeSans"
        fw="700"
        fs={{ md: "32px", lg: "32px", sm: "30px", xs: "20px" }}
        sx={{
          mt: 20,
          textAlign: {
            lg: "start",
            md: "start",
            sm: "center",
            xs: "center",
          },
        }}
      >
        The <span style={{ color: "#2DDB81" }}>Roadmap</span>
      </Text>
    </Box>
  );
}