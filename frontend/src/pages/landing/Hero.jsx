import { Box } from "@mui/material";
import Text from "../../components/Text";
import Button from "../../components/Button";
import { Link } from "react-scroll";

export default function Hero() {
  return (
    <Box
      sx={{
        background: {
          md: "url('/svgs/Hero-Bg.svg') top center / contain no-repeat",
          xs: "url('/svgs/Hero-BgSm.svg') bottom center / cover no-repeat",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: { md: "center", xs: "center" },
      }}
      pb={40}
    >
      <Text
        color="#fff"
        ff="KyivTypeSans"
        fw="700"
        fs={{ md: "44px", lg: "44px", sm: "30px", xs: "20px" }}
        sx={{
          mb: "0px",
          textAlign: {
            lg: "center",
            md: "center",
            sm: "center",
            xs: "center",
          },
          mx: { md: "0px", lg: "150px", xl: "300px", sm: "0px", xs: "30px" },
          mt: 10,
        }}
      >
        Your Guide Through the Maze of Security{" "}
        <span style={{ color: "#2DDB81" }}>Certifications & Compliance</span>
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
          mx: { md: "0px", lg: "150px", xl: "500px", sm: "20px", xs: "30px" },
          mt: 5,
        }}
      >
        In today's digital world, securing your startup or SMB against online
        threats while securing business opportunities has never been more
        critical. But let's face it, navigating the complex labyrinth of
        security certifications can feel like trying to solve a riddle wrapped
        in a mystery inside an enigma.
      </Text>
      <Box display="flex" justifyContent="center">
        <Link to="waitlist" smooth={true} duration={500}>
          <Button
            sx={{ mt: 5 }}
            type="submit"
            height="56px"
            width="280px"
            variant="contained"
          >
            Join the waitlist
          </Button>
        </Link>
      </Box>
    </Box>
  );
}