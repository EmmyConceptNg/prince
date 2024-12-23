import { Box, Stack } from "@mui/material";
import Text from "../../../components/Text";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Form, Formik } from "formik";
import { useState } from "react";
import { aiQuestionnaireValidation } from "../../../utils/Index";

export default function AiQuestionnaire() {
  return (
    <Stack spacing={20}>
      <Ask />
    </Stack>
  );
}

function Ask() {
  const questions = [
    "What can we help you with?",
    "What is your target audience?",
    "What is your budget range?",
    "What is your timeline for the project?",
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleGenerateRoadmap = () => {
    console.log("Generating roadmap...");
  };

  return (
    <Box mt={10}>
      <Stack spacing={3} alignItems="center">
        <Box
          width="49px"
          height="49px"
          bgcolor="#2DDB81"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="100%"
        >
          <Text fs="18px" fw="600" color="#fff" textAlign="center">
            {currentQuestionIndex + 1}
          </Text>
        </Box>
        <Text
          color="#fff"
          fw="700"
          fs={{ md: "36px", xs: "26px" }}
          sx={{
            mb: 3,
            textAlign: "center",
          }}
        >
          {questions[currentQuestionIndex]}
        </Text>
        <Formik
          initialValues={{ answer: "" }}
          validationSchema={aiQuestionnaireValidation}
          onSubmit={(values, { resetForm }) => {
            if (currentQuestionIndex < questions.length - 1) {
              handleNext();
              resetForm(); // Clear the input field for the next question
            } else {
              handleGenerateRoadmap();
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Input
                type="text"
                width="400px"
                required
                placeholder="Enter your answer"
                aria-label="Answer input"
                name="answer"
                sx={{ bgcolor: "transparent" }}
              />
              {currentQuestionIndex < questions.length - 1 ? (
                <Button
                  loading={isSubmitting}
                  height="44px"
                  width="100%"
                  type="submit"
                  variant="contained"
                >
                  <span style={{ color: "#333333" }}>Next Question</span>
                </Button>
              ) : (
                <Button
                  loading={isSubmitting}
                  height="44px"
                  width="100%"
                  type="submit"
                  variant="contained"
                >
                  <span style={{ color: "#333333" }}>Generate Roadmap</span>
                </Button>
              )}
            </Form>
          )}
        </Formik>
      </Stack>
    </Box>
  );
}
