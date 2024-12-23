import PropTypes from "prop-types";
import { Box, Divider, Stack } from "@mui/material";
import Button from "../Button";
import Text from "../Text";
import { businessNameValidation } from "../../utils/Index";
import SearchInput from "../Search";
import PlusIcon from "../../../public/svgs/PlusIcon";
import { Form, Formik } from "formik";
import Input from "../Input";
import SelectInput from "../Select";

function TicketForm(props) {
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
      <Box
        sx={{
          bgcolor: "#0C0E0D",
          border: "1px solid #10281B",
          borderRadius: "10px",
        }}
        p={{ md: 3, xs: 1 }}
      >
        <Text fs="18px" fw="600" color="#fff">
          Create Quick Ticket
        </Text>
        <Text fs="16px" fw="500" color="#9AE1BC">
          Write and address new queries and issues
        </Text>

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
                        label: "Email",
                        placeholder: "Type Email",
                        name: "email",
                        type: "email",
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
                        label: "Request Ticket Type",
                        placeholder: "Choose Type",
                        name: "type",
                        options: [
                          { label: "new", value: "new" },
                          { label: "ongoing", value: "ongoing" },
                          { label: "resolved", value: "resolved" },
                        ],
                      },
                      {
                        label: "Priority Status",
                        placeholder: "Select Status",
                        name: "status",
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
                <Box mt={6}>
                  <Input
                    label="Ticket Body"
                    labelSize="17px"
                    width="100%"
                    required
                    placeholder="Type ticket issue here"
                    aria-label="Type ticket issue here"
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
      <Text fs="32px" fw="700" sx={{ color: "#fff" }}>
        New Ticket
      </Text>

      <Box
        display="flex"
        flexDirection={{ md: "row", xs: "column" }}
        alignItems={{ md: "center", xs: "flex-start" }}
        justifyContent="flex-start"
        gap={2}
      >
        <SearchInput width="250px" height="45px" placeholder="Search" />
        <Button
          width="180px"
          height="45px"
          type="button"
          startIcon={<PlusIcon />}
          to="/dashboard/support/create-ticket"
          variant="contained"
        >
          <span style={{ color: "#333333" }}>Open Ticket</span>
        </Button>
      </Box>
    </Box>
  );
}

TicketForm.propTypes = {};

export default TicketForm;
