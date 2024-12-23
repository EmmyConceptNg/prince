import { Box, Grid, Stack } from "@mui/material";
import Results from "../../home/pricing/Results";
import How from "../../home/howItWorks/How";
import Text from "../../../components/Text";
import SearchInput from "../../../components/Search";
import GuideIcon from "../../../../public/svgs/GuideIcon";

export default function HelpCenter() {
  return (
    <Stack spacing={10}>
      <Header />
      <Ask />
      <Guide />
    </Stack>
  );
}


function Header() {
  return (
    <Box
      display="flex"
      flexDirection={{ md: "row", xs: "column" }}
      justifyContent="space-between"
    >
      <Text fs="32px" fw="700" sx={{ color: "#fff" }}>
        Help Center
      </Text>
    </Box>
  );
}


function Ask() {
  return (
    <Box mt={10}>
      <Stack spacing={3} alignItems="center">
        <Text
          color="#fff"
          ff="KyivTypeSans"
          fw="700"
          fs={{ md: '36px', xs: '26px' }}
          sx={{
            mb: 3,
            textAlign: "center",
          }}
        >
          What can we help you with 
        </Text>
        <SearchInput width="320px" placeholder="Search help center" />
      </Stack>
      <Box component="img" src="/svgs/ball.svg" display={{ md: 'block', xs: 'none' }} position="absolute" left={{ lg:1000, xl:1200, md: 600 }} top={{ lg: 50, md: 20 }} />
    </Box>
  );
}



const results = [
  {
    question: "How to start?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt aliquet velit a pharetra. Phasellus ut nisl pulvinar, ornare nulla eget, dictum tellus. Nunc cursus erat non diam bibendum, quis fringilla neque commodo. ",
  },
  {
    question: "What is the most popular Framework?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt aliquet velit a pharetra. Phasellus ut nisl pulvinar, ornare nulla eget, dictum tellus. Nunc cursus erat non diam bibendum, quis fringilla neque commodo. ",
  },
  {
    question: "How can I get certification?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt aliquet velit a pharetra. Phasellus ut nisl pulvinar, ornare nulla eget, dictum tellus. Nunc cursus erat non diam bibendum, quis fringilla neque commodo. ",
  },
  {
    question: "Cloud security frameworks?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt aliquet velit a pharetra. Phasellus ut nisl pulvinar, ornare nulla eget, dictum tellus. Nunc cursus erat non diam bibendum, quis fringilla neque commodo. ",
  },
];



function Guide() {
  return (
    <Grid
      container
      spacing={{ md: 4, xs: 0 }}
      justifyContent={{ xs: "center", md: "flex-start" }}
    >
      {results.map(({ question, answer }, index) => (
        <Grid item md={6} sm={12} lg={6} key={index}>
          <Stack spacing={2} mb={5} direction="row" alignItems="flex-start">
            <Box
              display="flex"
              justifyContent={{ md: "flex-start", xs: "center" }} width={{ md:"117px", xs: '40px' }}
            >
              <GuideIcon />
            </Box>
            <Stack spacing={2}>
              <Text
                color="#fff"
                fw="700"
                fs="24px"
                sx={{
                  mb: 0,
                  textAlign: "left",
                }}
              >
                {question}
              </Text>
              <Text
                color="#fff"
                fw="400"
                fs="13px"
                sx={{
                  mb: 0,
                  textAlign: "left",
                }}
              >
                {answer}
              </Text>
            </Stack>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}



