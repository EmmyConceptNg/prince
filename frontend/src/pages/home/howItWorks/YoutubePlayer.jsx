import { Box, Stack } from "@mui/material";
import Text from "../../../components/Text";

export default function YoutubePlayer() {
  return (
    <Box
      sx={{
        background: {
          md: "url('/svgs/Roadmap-Bg.png') #000 top center / cover no-repeat",
          xs: "url('/svgs/Roadmap-Bg.png') #000 bottom center / cover no-repeat",
        },
        marginTop: "-250px",
        marginBottom: "80px",
        heigth: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pt: 50,
      }}
    >
      <Stack
        spacing={5}
        sx={{
          px: { lg: "100px", md: "100px", xs: "10px" },
          mt: { md: 10, xs: 4 },
        }}
      >
        <Box>
          <Text
            color="#fff"
            ff="KyivTypeSans"
            fw="700"
            fs={{ md: "32px", xs: "20px" }}
            sx={{
              mb: 0,
              textAlign: { md: "center", xs: "center" },
            }}
          >
            Welcome to CertRiddle! where we {' '}
          </Text>
          <Text
            color="#fff"
            ff="KyivTypeSans"
            fw="700"
            fs={{ md: "32px", xs: "20px" }}
            sx={{
              mb: 3,
              textAlign: { md: "center", xs: "center" },
            }}
          >
            <span style={{ color: "#2DDB81" }}>
              simplify the complexities of security certifications and
              compliance.
            </span>
          </Text>
          <Text
            color="#fff"
            fw="500"
            fs={{ md: "18px", xs: "15px" }}
            sx={{
              mb: 3,
              textAlign: { md: "center", xs: "center" },
            }}
          >
            Imagine a future where your startup is not just protected from
            online threats but also thrives by unlocking new business
            opportunities with ease. At CertRiddle, we turn the daunting task of
            navigating security certifications into a seamless journey. Say
            goodbye to the puzzle, and let us guide you confidently through the
            labyrinth of compliance, so you can focus on what truly
            matters—growing your business.
          </Text>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box component="img" src="/svgs/Player.svg" width="100%" />
        </Box>
        <Box>
          <Text
            color="#fff"
            ff="KyivTypeSans"
            fw="700"
            fs={{ md: "32px", xs: "20px" }}
            sx={{
              mb: 0,
              textAlign: { md: "center", xs: "center" },
            }}
          >
            Simplifying Your Journey to
          </Text>
          <Text
            color="#2DDB81"
            ff="KyivTypeSans"
            fw="700"
            fs={{ md: "32px", xs: "20px" }}
            sx={{
              mb: 3,
              textAlign: { md: "center", xs: "center" },
            }}
          >
            Security Success
          </Text>
          <Text
            color="#fff"
            fw="500"
            fs={{ md: "18px", xs: "15px" }}
            sx={{
              mb: 3,
              textAlign: { md: "center", xs: "center" },
            }}
          >
            CertRiddle is designed with one goal in mind: to simplify the
            complex security certification journey for SMBs and startups. We
            understand the hurdles of deciphering which certifications are vital
            for your business, the daunting task of meeting countless compliance
            requirements, and the sheer amount of time and resources needed to
            get certified. That's why we've created a solution to make this
            journey as straightforward and hassle-free as possible.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}