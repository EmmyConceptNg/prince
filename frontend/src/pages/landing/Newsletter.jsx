import { Box, Stack } from "@mui/material";
import Text from "../../components/Text";
import { Form, Formik } from "formik";
import { newsletterValidation } from "../../utils/Index";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Newsletter() {
     const initialValues = {
       email: "",
     };
     const handleNewsLetter = (values, actions) => {};
  
  return (
    <Box
      sx={{
        background: {
          md: "url('/svgs/Roadmap-Bg.png') #000 center center / cover no-repeat",
          xs: "url('/svgs/Roadmap-Bg.png') #000 bottom center / auto no-repeat",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pb: { md: 20, xs: 0 },
        height: "100%",
      }}
    >
      <Stack
        sx={{
          border: "1px solid #000",
          borderRadius: "16px",
          width: "100%",
          mx: { lg: "100px", md: "100px", xs: "0px" },
          py: 10,
        }}
        mt={10}
        justifyContent="space-between"
        spacing={2}
      >
        <Text
          color="#fff"
          fw="700"
          ff="KyivTypeSans"
          fs={{ md: "36px", lg: "36px", sm: "24px", xs: "24px" }}
          sx={{
            textAlign: "center",
          }}
        >
          Still thinking about it?
        </Text>
        <Text
          color="#fff"
          fw="400"
          fs={{ md: "20px", lg: "20px", sm: "16px", xs: "16px" }}
          sx={{
            textAlign: "center",
          }}
        >
          All certificates in one place
        </Text>

        <Box padding={{ md: "64px, 154px, 64px, 154px", xs: 2 }} width={{ md:"30%", xs : '100%' }}>
          <Formik 
            initialValues={initialValues}
            validationSchema={newsletterValidation}
            onSubmit={handleNewsLetter}
          >
            {({ isSubmitting }) => (
              <Form>
                <Stack spacing={2}
                  direction={{ md: "row", xs: "column" }}
                  alignItems="center"
                  justifyContent="center"
                  width="100%"
                >
                  <Input
                    sx={{ bgcolor: "transparent" }}
                    height="48px"
                    name="email"
                    
                    placeholder="Enter your email"
                    aria-label="enter your email"
                  />
                  <Button
                    type="submit"
                    loading={isSubmitting}
                    height="48px"
                    width="300px"
                    variant="contained"
                  >
                    Join the waitlist
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>

          <Box display="flex" justifyContent="flex-start">
            <Text
              color="#FFFFFF59"
              fw="400"
              fs={{ md: "14px", lg: "14px", sm: "12px", xs: "12px" }}
              sx={{
                textAlign: "left",
              }}
            >
              We care about your data in our privacy policy.
            </Text>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}