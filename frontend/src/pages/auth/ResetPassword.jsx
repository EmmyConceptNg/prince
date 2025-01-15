import { Box, Stack } from "@mui/material";

import Text from "../../components/Text";

import Button from "../../components/Button";
import { useState } from "react";
import { ArrowBack } from "@mui/icons-material";
import { Formik, Form } from "formik";
import { notify, passwordValidation } from "../../utils/Index";
import { setUser } from "../../redux/UserReducer";
import { useDispatch } from "react-redux";
import axios from "../../api/axios";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../../components/Input";


export default function ResetPassword() {
  const [sendMailBtn, setSendMailBtn] = useState(false);
const dispatch = useDispatch();

const {token, email} = useParams()
   const initialValues = {
     password: "",
     confirmPassword: "",
     token,email
   };

   const navigate = useNavigate()

   const handleResetPassword = (values, actions) => {
     actions.setSubmitting(true);

     axios
       .post("/api/auth/password-reset", values, {
         headers: { "Content-Type": "application/json" },
       })
       .then((response) => {
         console.log(response.data.user);
         dispatch(setUser(response.data.user));
         notify("Password Reset Successful", "success");
         if (!response.data.user.emailVerified) {
           navigate("/verification/link/email");
         } else {
           navigate("/dashboard");
         }
       })
       .catch((error) => {
         console.log(error);
         notify(error?.response?.data?.error, "error");
       })
       .finally(() => actions.setSubmitting(false));
   };
  return (
    <Box display="flex" justifyContent="center"  mt={10}>
      <Box sx={{ mx: "auto" }} width={{ xs: "343px", sm: "360px" }}>
        <Stack spacing={3} justifyContent="center" alignItems="center">
          {/* <LockIcon /> */}

          <Text fw="550" fs="30px" color="#fff">
            Set new password
          </Text>
          <Text fw="400" fs="16px" sx={{ textAlign: "center" }} color="#fff">
            Your new password must be different to previously used passwords.
          </Text>

          <Formik
            initialValues={initialValues}
            validationSchema={passwordValidation}
            onSubmit={handleResetPassword}
          >
            {({ isSubmitting }) => (
              <Form>
                <Stack
                  spacing={7}
                  mt={2}
                  sx={{ width: { lg: "520px", sm: "450px" } }}
                >
                  
                  <Input
                    label="Password"
                    type="password"
                    endAdornment
                    required
                    placeholder="Enter you password"
                    aria-label="enter your password"
                    name="password"
                    sx={{ bgcolor: "transparent" }}
                  />
                  
                  <Input
                    label="Confirm Password"
                    type="password"
                    endAdornment
                    required
                    placeholder="Confirm Password"
                    aria-label="enter your password"
                    name="confirmPassword"
                    sx={{ bgcolor: "transparent" }}
                  />

                  <Button
                    loading={isSubmitting}
                    width="100%"
                    height="44px"
                    type="submit"
                    variant="contained"
                  >
                    Reset 
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
          <Button
            sx={{ color: "#fff" }}
            width="100%"
            heigh="44px"
            type="button"
            startIcon={<ArrowBack />}
            color="#fff"
          >
            Back to log in
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
