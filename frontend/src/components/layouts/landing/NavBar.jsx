import { Link } from "react-scroll";
import { Stack, Box } from "@mui/material";
import PropTypes from "prop-types";
import Button from "../../Button";


export default function NavBar({ ffor = "" }) {
  return (
    <>
      <Box
        flexGrow={1}
        sx={{
          display: { xs: "block", md: "flex", lg: "flex" },
          justifyContent: "flex-end",
        }}
      >
        <Stack
          justifyContent="flex-start"
          spacing={{ md:5, xs: 2}}
          sx={{ ml: "30px" }}
          direction={ffor == "mobile" ? "column" : "row"}
          alignItems={ffor == "mobile" ? "start" : "flex-start"}
        >
          {[
            {
              to: "blog",
              name: "Blog",
            },
            {
              to: "linkedin",
              image:"/svgs/LinkedIn.svg"
            },
            {
              to: "facebook",
              image:"/svgs/Facebook.svg"
            },
            {
              to: "twitter",
              image:"/svgs/Twitter.svg"
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
    </>
  );
}
NavBar.propTypes = {
  ffor: PropTypes.string,
};
