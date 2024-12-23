import { Box, Grid, Stack } from "@mui/material";
import Text from "../../../components/Text";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Button from "../../../components/Button";
import TempChart from "../../../../public/svgs/TempChart";
import RoadmapTable from "../../../components/dashboard/RoadmapTable";
import NotificationTable from "../../../components/dashboard/NotificationTable";
import BusinessTable from "../../../components/dashboard/BusinessTable";
import BusinessForm from "../../../components/dashboard/BusinessForm";


export default function CreateBusiness() {
  return (
    <>
      <Box bgcolor="#000">
        <Helmet>
          <title> Create Business </title>
        </Helmet>
        <Stack spacing={5}>
          <BusinessForm />
        </Stack>
      </Box>
    </>
  );
}




