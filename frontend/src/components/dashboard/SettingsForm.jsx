import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Box,
  Avatar,
  AvatarGroup,
  Divider,
  Stack,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import Button from "../Button";
import SuitcaseIcon from "../../../public/svgs/SuitcaseIcon";
import ShieldIcon from "../../../public/svgs/ShieldIcon";
import EyeIcon from "../../../public/svgs/EyeIcon";
import DeleteIcon from "../../../public/svgs/DeleteIcon";
import EditIcon from "../../../public/svgs/EditIcon";
import Text from "../Text";
import SearchInput from "../Search";
import PlusIcon from "../../../public/svgs/PlusIcon";
import { Pagination } from "../Pagination";
import { Form, Formik } from "formik";
import { businessNameValidation } from "../../utils/Index";
import Input from "../Input";

function SettingsForm(props) {
  return (
    <>
      <Header />

      <TableX />
    </>
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
      <Stack
        spacing={2}
        sx={{
          bgcolor: "#0C0E0D",
          border: "1px solid #10281B",
          borderRadius: "10px",
        }}
        p={{ md: 3, xs: 1 }}
      >
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
                sx={{ width: { lg: "700px", sm: "100%" } }}
              >
                <Input
                  label="Username"
                  inputDirection={{ md: "row", xs: "column" }}
                  inputGap={{ md: 10, xs: 0 }}
                  labelSize="14px"
                  width="400px"
                  required
                  placeholder="olivia"
                  aria-label="olivia"
                  name="username"
                  sx={{ bgcolor: "transparent" }}
                />
                <Input
                  type="url"
                  label="Username"
                  inputDirection={{ md: "row", xs: "column" }}
                  inputGap={{ md: 10, xs: 0 }}
                  labelSize="14px"
                  width="400px"
                  required
                  placeholder="Website URL"
                  aria-label="Website URL"
                  name="url"
                  sx={{ bgcolor: "transparent" }}
                />

                <Stack
                  direction={{ md: "row", xs: "column" }}
                  gap="40px"
                  alignItems="flex-start"
                >
                  <Box>
                    <Text fs="14px" fw="500" color="#fff">
                      Your Photo
                    </Text>
                    <Text fs="15px" fw="400" color="#FFFFFF80">
                      This will be displayed on your profile
                    </Text>
                  </Box>
                  <Avatar
                    width="64px"
                    height="64px"
                    src="/svgs/default-img.svg"
                  />
                  <Stack
                    direction="row"
                    gap="20px"
                    sx={{ marginLeft: { md: "200px" } }}
                    alignItems="flex-start"
                  >
                    <Text fs="15px" fw="400" color="#FFFFFF80" cursor="pointer">
                      Delete
                    </Text>
                    <Text fs="15px" fw="400" color="#2DDB81" cursor="pointer">
                      Update
                    </Text>
                  </Stack>
                </Stack>

                <Box
                  sx={{
                    marginBottom: {
                      md: "50px !important",
                      xs: "80px !important",
                    },
                  }}
                >
                  <Input
                    label="Your Bio"
                    inputDirection={{ md: "row", xs: "column" }}
                    inputGap={{ md: 10, xs: 0 }}
                    labelSize="14px"
                    width="400px"
                    required
                    placeholder="Write a short introduction"
                    aria-label="bio"
                    multiline
                    rows={4}
                    name="multiline"
                    sx={{ bgcolor: "transparent" }}
                  />
                </Box>

                <Box>
                  <Input
                    type="text"
                    label="Job Title"
                    inputDirection={{ md: "row", xs: "column" }}
                    inputGap={{ md: 10, xs: 0 }}
                    labelSize="14px"
                    width="400px"
                    required
                    placeholder="Product Designer"
                    aria-label="product-designer"
                    name="jobTitle"
                    sx={{ bgcolor: "transparent" }}
                  />
                  <FormControlLabel
                    sx={{ mt: { md: 0, xs: 5 } }}
                    control={
                      <Checkbox
                        defaultChecked
                        sx={{
                          color: "#FFFFFF80", // Default color
                          "&.Mui-checked": {
                            color: "#2DDB81", // Checked color
                          },
                          ml: { md: 18, xs: 0 },
                        }}
                      />
                    }
                    label={
                      <Text sx={{ color: "#FFFFFF80" }} fs="14px" fw="500">
                        Show my job title in my profile
                      </Text>
                    }
                  />
                </Box>

                <Box>
                  <Text fs="32px" fw="600" color="#fff">
                    Password
                  </Text>
                  <Text fs="14px" fw="400" color="#FFFFFF80">
                    Please enter your current password to change your password.
                  </Text>

                  <Stack spacing={4}>
                    <Input
                      type="password"
                      label="Current Password"
                      inputDirection={{ md: "row", xs: "column" }}
                      inputGap={{ md: 10, xs: 0 }}
                      labelSize="12px"
                      width="300px"
                      required
                      placeholder="*********"
                      aria-label="currentPassword"
                      name="currentPassword"
                      sx={{ bgcolor: "transparent" }}
                    />
                    <Input
                      type="password"
                      label="New Password"
                      inputDirection={{ md: "row", xs: "column" }}
                      inputGap={{ md: 12, xs: 0 }}
                      labelSize="12px"
                      width="300px"
                      required
                      placeholder="*********"
                      aria-label="newPassword"
                      name="newPassword"
                      sx={{ bgcolor: "transparent" }}
                    />
                    <Input
                      type="password"
                      label="Confirm Password"
                      inputDirection={{ md: "row", xs: "column" }}
                      inputGap={{ md: 10, xs: 0 }}
                      labelSize="12px"
                      width="300px"
                      required
                      placeholder="*********"
                      aria-label="confirmPassword"
                      name="confirmPassword"
                      sx={{ bgcolor: "transparent" }}
                    />
                  </Stack>
                </Box>

                <Box display="flex" justifyContent="flex-start">
                  <Button
                    loading={isSubmitting}
                    height="44px"
                    type="submit"
                    variant="contained"
                  >
                    Save
                  </Button>
                </Box>
              </Stack>
            </Form>
          )}
        </Formik>
      </Stack>
    </>
  );
};

function Header() {
  return (
    <Stack spacing={3}>
       <Box display="flex" flexDirection={{md: 'row', xs : 'column'}} justifyContent="space-between">
            <Text fs="32px" fw="700" sx={{ color: "#fff" }}>
              Settings
            </Text>
              
              <Button
                width="200px"
                height="45px"
                type="button"
                to="/dashboard/company/employee"
                variant="contained"
              >
                <span style={{ color: "#333333" }}>
                Switch to Company
                </span>
              </Button>
            
          </Box>
      <Box>
        <Text fs="24px" fw="600" sx={{ color: "#fff" }}>
          Profile
        </Text>
        <Text fs="14px" fw="400" sx={{ color: "#FFFFFF80" }}>
          Update your photo and personal details here
        </Text>
      </Box>

      <Divider sx={{ background: "#FFFFFF1A" }} />
    </Stack>
  );
}

SettingsForm.propTypes = {};

export default SettingsForm;
