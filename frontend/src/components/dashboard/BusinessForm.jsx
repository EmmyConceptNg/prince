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

function BusinessForm(props) {
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
                {[
                  {
                    label: "Business Name",
                    placeholder: "Enter Business Name",
                    name: "name",
                  },
                  {
                    label: "Business Address",
                    placeholder: "Enter Business Address",
                    name: "address",
                  },
                  {
                    label: "Number of Employees",
                    placeholder: "Number of Employees",
                    name: "no_employees",
                  },
                  {
                    label: "Telephone Number",
                    placeholder: "Telephone Number",
                    name: "tel",
                  },
                  {
                    label: "Email Address",
                    placeholder: "Enter Email Address",
                    name: "email",
                    type: "email",
                  },
                  {
                    label: "CEO/CTO/CFO/Founder Names",
                    placeholder: "CEO/CTO/CFO/Founder Names",
                    name: "founder_name",
                  },
                  {
                    label: "Website URL",
                    placeholder: "Website URL",
                    name: "url",
                    type: "url",
                  },
                ].map((item) => (
                  <Input
                    key={item}
                    type={item?.type ? item?.type : "text"}
                    label={item.label}
                    inputDirection="row"
                    inputGap={10}
                    labelSize="17px"
                    width="400px"
                    required
                    placeholder={item.placeholder}
                    aria-label={item.placeholder}
                    name={item.name}
                    sx={{ bgcolor: "transparent" }}
                  />
                ))}

                <Button
                  loading={isSubmitting}
                  width="300px"
                  height="44px"
                  type="submit"
                  variant="contained"
                >
                  Create
                </Button>
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
      <Text fs="32px" fw="700" sx={{ color: "#fff" }}>
        Business Registration
      </Text>
      <Box>
        <Text fs="24px" fw="600" sx={{ color: "#fff" }}>
          What is your business about?
        </Text>
        <Text fs="14px" fw="400" sx={{ color: "#FFFFFF80" }}>
          Please enter information about your business.
        </Text>
      </Box>

      <Divider sx={{ background: "#FFFFFF1A" }} />
    </Stack>
  );
}

BusinessForm.propTypes = {};

export default BusinessForm;
