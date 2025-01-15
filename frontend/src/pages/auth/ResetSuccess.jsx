import { Box, Stack } from "@mui/material";

import Button from "../../components/Button";
import { useState } from "react";
import { ArrowBack } from "@mui/icons-material";
import Text from "../../components/Text";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { notify } from "../../utils/Index";
import axios from "../../api/axios";


export default function ResetSuccess() {
  const [sendMailBtn, setSendMailBtn] = useState(false);
  const navigate = useNavigate();

  const { email } = useParams();
  const handleResendMail = () => {
    setSendMailBtn(true);

    axios
      .get(`/api/auth/password/reset/${email}`)
      .then(() => {
        setSendMailBtn(false);
      })
      .catch((error) => setSendMailBtn(false))
      .finally(() => setSendMailBtn(false));

    setTimeout(() => {
      setSendMailBtn(false);
      notify("Mail resent successfully", "success");
    }, 5000);
  };

  const openMailProvider = () => {
    if (!email) return;

    const emailDomain = email.split("@")[1].toLowerCase();

    switch (emailDomain) {
      case "gmail.com":
        window.open("https://mail.google.com/", "_blank");
        break;
      case "yahoo.com":
        window.open("https://mail.yahoo.com/", "_blank");
        break;
      case "outlook.com":
      case "hotmail.com":
        window.open("https://outlook.live.com/mail/", "_blank");
        break;
      default:
        notify("Please check your email provider manually.", "info");
    }
  };

  return (
    <Box display="flex" justifyContent="center" component="form" mt={10}>
      <Box sx={{ mx: "auto" }} width={{ xs: "343px", sm: "360px" }}>
        <Stack spacing={3} justifyContent="center" alignItems="center">
          {/* <CheckSuccessIcon /> */}

          <Text fw="550" fs="30px" color="#fff">
            Password reset
          </Text>
          <Text
            fw="400"
            fs="16px"
            color="#FFFFFFD"
            sx={{ textAlign: "center" }}
          >
            A link has been sent to your email ({email}). click below to open
            your mail
          </Text>
          <Button
            loading={sendMailBtn}
            width="100%"
            heigh="44px"
            type="submit"
            variant="contained"
            onClick={openMailProvider}
          >
            <span style={{ color: "#000" }}>Open Mail</span>
          </Button>
          <Box display="flex">
            <Text sx={{ textAlign: "center" }} color="#fff" fs="14px" fw="400">
              Didn’t receive the email?
            </Text>
            {!sendMailBtn ? (
              <Text
                background="linear-gradient(180deg, #2DDB81 0%, #2DDB81 100%)"
                fs="14px"
                fw="700"
                onClick={() => handleResendMail()}
                sx={{
                  textAlign: "center",
                  marginLeft: 1,
                  color: "#FF9D43",
                  cursor: "pointer",
                }}
              >
                Click to resend
              </Text>
            ) : (
              <Text
                background="linear-gradient(180deg, #2DDB81 0%, #2DDB81 100%)"
                fs="14px"
                fw="700"
                sx={{
                  textAlign: "center",
                  marginLeft: 1,
                  color: "#FF9D43",
                }}
              >
                Resending... Please wait!
              </Text>
            )}
          </Box>
          <Button
            sx={{ color: "#fff" }}
            color="#fff"
            width="100%"
            height="44px"
            type="button"
            startIcon={<ArrowBack />}
            onClick={() => navigate("/login")}
          >
            Back to log in
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
