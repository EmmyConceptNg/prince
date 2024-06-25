import { Box, Stack } from "@mui/material";
import { Link } from "react-scroll";
import Text from "../../components/Text";

export default function Footer() {
  return (
    <Box sx={{ mx: { md: 10, xs: 2 }, pb: 10 }}>
      <Box display="flex" justifyContent={{ md:'flex-start', xs:'center' }}>
        <Box component="img" src="/logo/Logo.svg" sx={{ height: "72px" }} />
      </Box>
      <Box mt={3}>
        <Stack
          justifyContent={{ md: "flex-start", xs: "center" }}
          spacing={{ md: 5, xs: 2 }}
          direction="row"
          alignItems={{ md: "flex-start", xs: "center" }}
        >
          {[
            {
              to: "linkedin",
              image: "/svgs/LinkedIn.svg",
            },
            {
              to: "facebook",
              image: "/svgs/Facebook.svg",
            },
            {
              to: "twitter",
              image: "/svgs/Twitter.svg",
            },
          ].map((nav, index) => (
            <Link
              style={{
                color: "#fff",
                cursor: "pointer",
              }}
              to={nav?.to}
              smooth={true}
              duration={500}
              key={index}
            >
              <Box display="flex">
                {nav?.name && nav?.name}
                {nav?.image && <Box component="img" src={nav?.image} />}
              </Box>
            </Link>
          ))}
        </Stack>
      </Box>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ mt: 4 }}
        justifyContent={{ md: "space-between", xs: "center" }}
        alignItems="center"
      >
        <Text
          color="#9AE1BC"
          fw="400"
          fs={{ md: "16px", lg: "16px", sm: "12px", xs: "10px" }}
        >
          © 2024. All rights reserved.
        </Text>
        <Stack
          justifyContent="flex-start"
          spacing={{ md: 5, xs: 2 }}
          direction="row"
          alignItems="flex-start"
        >
          {[
            {
              to: "linkedin",
              name: "Terms",
            },
            {
              to: "facebook",
              name: "Privacy",
            },
            {
              to: "twitter",
              name: "Cookies",
            },
          ].map((nav, index) => (
            <Link
              style={{
                color: "#9AE1BC",
                cursor: "pointer",
              }}
              to={nav?.to}
              smooth={true}
              duration={500}
              key={index}
            >
              <Box display="flex">{nav?.name && nav?.name}</Box>
            </Link>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

 