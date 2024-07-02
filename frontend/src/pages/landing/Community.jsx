import { Box } from "@mui/material";
import Text from "../../components/Text";
import Button from "../../components/Button";

export default function Community() {
  return (
    <Box
      sx={{
        mx: { md: 10, xs: 0 },
        background: {
          md: "url('/svgs/Community-Bg.svg') top center / cover no-repeat",
          xs: "url('/svgs/Community-BgSm.svg') top center / cover no-repeat",
        },

        height: {md:"100%", xs:"50%"},
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        pt: 40,
      }}
    >
      <Text
        color="#2DDB81"
        ff="KyivTypeSans"
        fw="700"
        fs={{ md: "14px", lg: "14px", sm: "10px", xs: "10px" }}
        sx={{
          mb: "0px",
          textAlign: "center",
          mt: 10,
        }}
      >
        Let's Solve the Puzzle Together!
      </Text>
      <Text
        color="#fff"
        ff="KyivTypeSans"
        fw="700"
        fs={{ md: "44px", lg: "44px", sm: "30px", xs: "20px" }}
        sx={{
          mb: "0px",
          textAlign: "center",
          mx: { md: "0px", lg: "150px", xl: "300px", sm: "0px", xs: "0px" },
        }}
      >
        Join the CertRiddle Community
      </Text>
      <Text
        color="#fff"
        fw="400"
        fs={{ md: "15px", lg: "15px", sm: "10px", xs: "9px" }}
        sx={{
          textAlign: {
            lg: "center",
            md: "center",
            sm: "center",
            xs: "center",
          },
          mx: { md: "0px", lg: "150px", xl: "500px", sm: "0px", xs: "0px" },
          mt: 5,
        }}
      >
        Ready to demystify the world of security certifications & compliance?
        Join CertRiddle today and start your journey toward security success.
        With CertRiddle, you're not just getting certified; you're securing the
        future of your business growth with confidence.
      </Text>

      <Button
        sx={{ mt: 5 }}
        type="submit"
        height="48px"
        width="220px"
        variant="contained"
      >
        Join Community
      </Button>
    </Box>
  );
}