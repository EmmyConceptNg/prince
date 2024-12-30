import PropTypes from "prop-types";
import { Box, Divider, Stack } from "@mui/material";
import Button from "../Button";
import Text from "../Text";
import { aiQuestionnaireValidation, businessNameValidation } from "../../utils/Index";
import SearchInput from "../Search";
import PlusIcon from "../../../public/svgs/PlusIcon";
import { Form, Formik } from "formik";
import Input from "../Input";
import SelectInput from "../Select";
import Questionnaire from "../../pages/management/questionnaire/Index";
import { useState } from "react";
import { FedRamp } from "../../pages/dashboard/Roadmaps/FedRamp";

function QuestionnaireForm(props) {
  return (
    <>
      <Header />

      <TableX />

      <Text fs="24px" fw="600" color="#fff">Preview Mode</Text>
      <Ask />
      <Text fs="24px" fw="600" color="#fff">Roadmap Preview</Text>
      <FedRamp />
    </>
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
    <Box mt={10}
      sx={{
        bgcolor: "#0C0E0D",
        border: "1px solid #10281B",
        borderRadius: "10px",
      }}
      p={{ md: 3, xs: 1 }}
    >
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

const TableX = () => {
  const initialValues = {
    name: "",
    address: "",
    no_employees: "",
    tel: "",
    email: "",
    founder_name: "",
    url: "",
  };

  const handleBusinessRegistration = () => {};

  return (
    <>
      <Box
        sx={{
          bgcolor: "#0C0E0D",
          border: "1px solid #10281B",
          borderRadius: "10px",
        }}
        p={{ md: 3, xs: 1 }}
      >
        <Stack spacing={2}>
          <Formik
            initialValues={initialValues}
            validationSchema={businessNameValidation}
            onSubmit={handleBusinessRegistration}
          >
            {({ isSubmitting }) => (
              <Form>
                <Stack
                  spacing={7}
                  mt={2}
                  direction={{ md: "row", xs: "column" }}
                  sx={{ flexWrap: "wrap" }}
                >
                  <Box>
                    {[
                      {
                        label: "Title",
                        placeholder: "title",
                        name: "title",
                        type: "text",
                      },
                    ].map((item) => (
                      <Input
                        key={item}
                        type={item?.type ? item?.type : "text"}
                        label={item.label}
                        labelSize="17px"
                        width="400px"
                        required
                        placeholder={item.placeholder}
                        aria-label={item.placeholder}
                        name={item.name}
                        sx={{ bgcolor: "transparent" }}
                      />
                    ))}
                  </Box>
                  <Stack direction="row" spacing={7}>
                    {[
                      {
                        label: "Question Type",
                        placeholder: "Choose Type",
                        name: "type",
                        options: [
                          { label: "new", value: "new" },
                          { label: "ongoing", value: "ongoing" },
                          { label: "resolved", value: "resolved" },
                        ],
                      },
                    ].map((item) => (
                      <SelectInput
                        key={item}
                        type={item?.type ? item?.type : "text"}
                        label={item.label}
                        labelSize="17px"
                        width="400px"
                        required
                        placeholder={item.placeholder}
                        aria-label={item.placeholder}
                        name={item.name}
                        sx={{ bgcolor: "transparent" }}
                        options={item?.options}
                      />
                    ))}
                  </Stack>
                </Stack>
                <Box mt={6} mb={20}>
                  <Input
                    label="Description"
                    labelSize="17px"
                    width="100%"
                    required
                    placeholder="description"
                    aria-label="description"
                    name="body"
                    multiline
                    rows={5}
                    sx={{ bgcolor: "transparent" }}
                  />
                </Box>
                <Box mt={6}>
                  <Text fs="24px" fw="600" color="#fff" sx={{mb:2}}>Content Editor</Text>
                  <Input
                    label="Content:"
                    labelSize="17px"
                    width="100%"
                    required
                    placeholder="write your content"
                    aria-label="write your content"
                    name="body"
                    multiline
                    rows={5}
                    sx={{ bgcolor: "transparent" }}
                  />
                </Box>
                <Box mt={20} display="flex" justifyContent="flex-end">
                  <Button
                    loading={isSubmitting}
                    width="157px"
                    height="44px"
                    type="submit"
                    variant="contained"
                  >
                    <span style={{ color: "#333333" }}>Send Ticket</span>
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Stack>
      </Box>
    </>
  );
};

function Header() {
  return (
    <Box
      display="flex"
      flexDirection={{ md: "row", xs: "column" }}
      justifyContent="space-between"
    >
      <Text fs="24px" fw="600" sx={{ color: "#fff" }}>
        Create/edit Prompt:
      </Text>
    </Box>
  );
}

QuestionnaireForm.propTypes = {};

export default QuestionnaireForm;
