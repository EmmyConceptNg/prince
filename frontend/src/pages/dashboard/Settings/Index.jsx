import { Box, Grid, Stack } from "@mui/material";
import Text from "../../../components/Text";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Button from "../../../components/Button";
import TempChart from "../../../../public/svgs/TempChart";
import PricesCard from "../../home/pricing/PricesCard";
import SettingsForm from "../../../components/dashboard/SettingsForm";


export default function Settings() {
  return (
    <>
      <Box bgcolor="#000">
        <Helmet>
          <title>Settings</title>
        </Helmet>
        <Stack spacing={5}>
          <SettingsForm />
        </Stack>
      </Box>
    </>
  );
}

