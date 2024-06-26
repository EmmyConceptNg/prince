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
        <Box width="100%" height="100vh" bgcolor="#000" pb={10} pt={2}>
          <Header />

          <Hero />
          <Roadmap />
          <Lead />
          <WhyUs />
          <Box display={{ md: 'block', xs:'none' }}
            sx={{
              position: "absolute",
              width: "955.72px",
              height: "527.46px",
              top: "3626.09px",
              background: "#C0F497",
              filter: "blur(150px)", zIndex:'-1',
              transform: "rotate(173.52deg)",
            }}
          />
          <Box display={{ md: 'block', xs:'none' }}
            sx={{
              position: "absolute",
              width: "517.14px",
              height: "273.03px",
              left: "400.24px",
              top: "3726.09px",
              background: "#2DDB81",
              filter: "blur(100px)", zIndex:'-1',
              transform: "rotate(-178.32deg)",
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
