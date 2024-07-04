import { Box } from "@mui/material";
import { Helmet } from "react-helmet";

import Hero from "./Hero";
import Header from "../../components/layouts/landing/Header";
import Roadmap from "./Roadmap";
import Lead from "./Lead";
import WhyUs from "./WhyUs";
import Newsletter from "./Newsletter";
import Community from "./Community";
import Footer from "./Footer";

export default function Home() {
  return (
    <Box>
      <Helmet>
        <title>Prince - Home</title>
      </Helmet>
      <Box>
        <Box width="100%" bgcolor="" pt={2}>
          <Header />
          <Hero />
          <Roadmap />
          <WhyUs />
          <Box
            display={{ md: "block", xs: "none" }}
            sx={{
              position: "absolute",
              width: "955.72px",
              height: "400.46px",
              top: "3400px",
              background: "#C0F497",
              filter: "blur(150px)",
              transform: "rotate(173.52deg)",
              zIndex: "-1",
            }}
          />
          <Box
            display={{ md: "block", xs: "none" }}
            sx={{
              position: "absolute",
              width: "517.14px",
              height: "273.03px",
              left: "400.24px",
              top: "3350.09px",
              background: "#2DDB81",
              filter: "blur(100px)",
              transform: "rotate(-178.32deg)",
              zIndex: "-1",
            }}
          />
          <Newsletter />
          <Community />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
