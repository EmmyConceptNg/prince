import { Box, Stack } from "@mui/material";

import Text from "../../../components/Text";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useState } from "react";
import { ArrowBack } from "@mui/icons-material";


export default function MailSent() {
  const [sendMailBtn, setSendMailBtn] = useState(false);
  return (
    <Box display="flex" justifyContent="center" component="form" mt={10}>
      <Box sx={{ mx: "auto" }} width={{ xs: "343px", sm: "360px" }}>
        <Stack spacing={3} justifyContent="center" alignItems="center">
          {/* <MailIcon /> */}

          <Text fw="550" fs="30px" color="#131C30">
            Check your email
          </Text>
          <Text fw="400" fs="16px" color="#475467">
            We sent a password reset link to Paul@example-email.com
          </Text>
          <Button
            loading={sendMailBtn}
            width="100%"
            heigh="44px"
            type="submit"
            variant="contained"
          >
            Open email app
          </Button>
          <Box display="flex">
            <Text
              sx={{ textAlign: "center" }}
              color="#475467"
              fs="14px"
              fw="400"
            >
              Didn’t receive the email?
            </Text>
            <Text
              background="linear-gradient(180deg, #FF8934 0%, #FF3CD4 100%)"
              fs="14px"
              fw="700"
              onClick={() => {}}
              sx={{
                textAlign: "center",
                marginLeft: 1,
                color: "#FF9D43",
                cursor: "pointer",
              }}
            >
              Click to resend
            </Text>
          </Box>
          <Button
            sx={{ color: "#475467" }}
            width="100%"
            heigh="44px"
            type="button"
            startIcon={<ArrowBack />}
          >
            Back to log in
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
