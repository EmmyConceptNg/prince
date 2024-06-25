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
          <Newsletter />
          <Community />
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
