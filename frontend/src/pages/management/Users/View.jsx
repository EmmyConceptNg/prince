import { Box, Grid, IconButton, Stack } from "@mui/material";
import Text from "../../../components/Text";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { ArrowDownward, ArrowUpward, MoreVert } from "@mui/icons-material";
import UsersTable from "../../../components/management/UsersTable";

export default function UsersView() {
  return (
    <>
      <Box bgcolor="#000">
        <Helmet>
          <title>Users</title>
        </Helmet>
        <Stack spacing={5}>
          <Overview />
          <UsersTable />
        </Stack>
      </Box>
    </>
  );
}

function Overview() {
  return (
    <>
      <Box component="img" src="/svgs/UsersView.svg" />
    </>
  );
}
