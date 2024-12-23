import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  styled,
  Box,
} from "@mui/material";
import PropTypes from "prop-types";
import Text from "./Text";
import { useField } from "formik";
// ... other imports

const SelectField = styled(Select)(({ height, sx }) => ({
  // Styles similar to your InputField, adjusted for Select component
  "& .MuiSelect-select": {
    height: height,
    padding: "10px 14px",
    borderRadius: "8px",
    backgroundColor: sx ? sx.bgcolor : "#fff",
    color: "#667085",
    "&::placeholder": {
      color: "#9AE1BC",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
    outline: "none",
  },
  "& .MuiInputLabel-outlined": {
    transform: "translate(14px, 18px) scale(1)",
  },
  "& .MuiInputLabel-shrink": {
    transform: "translate(14px, -6px) scale(0.75)",
  },
}));

export default function SelectInput({
  required = true,
  id,
  label,
  name,
  height = "44px",
  width,
  options = [], // Added an options prop for the dropdown items
  sx,
  inputDirection = "column",
  inputGap,
  labelSize,
  placeholder,
  // ... other props
}) {
  // Your useState and handlers remain the same if needed for password toggle

  // Your Formik field logic
  const [field, meta] = useField(name);

  return (
    <FormControl fullWidth sx={{ height, ...sx }} variant="outlined">
      <Box
        display="flex"
        flexDirection={inputDirection ? inputDirection : "column"}
        alignItems={inputDirection == "row" ? "center" : ""}
        justifyContent={inputDirection == "row" ? "space-between" : ""}
        gap={inputDirection && inputGap ? inputGap : 0}
      >
        {label && (
          <label htmlFor={id} style={{ marginBottom: "10px" }}>
            <Text
              fw="500"
              fs={labelSize ? labelSize : "14px"}
              ml={5}
              color="#fff"
            >
              {label}
            </Text>
          </label>
        )}
        <Box
          sx={{
            border: "1px solid #10281B",
            borderRadius: "8px",
          }}
        >
          <SelectField
            labelId={`${id}-label`}
            id={id}
            label={label}
            fullWidth
            name={name}
            required={required}
            value={field.value || ""} // Ensure default value matches the placeholder value
            onChange={(event) => field.onChange(event)} // Update value on change
            displayEmpty // This ensures the placeholder is shown as selected
            sx={{ width }}
            MenuProps={{
              PaperProps: {
                sx: {
                  bgcolor: "#0C0E0D", // Background color of the menu
                  border: "1px solid #2DDB81", // Border for the menu
                  borderRadius: "10px", // Rounded corners
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Shadow for the menu
                  "& .MuiMenuItem-root": {
                    fontSize: "14px", // Font size for menu items
                    color: "#fff", // Text color for menu items
                    "&:hover": {
                      backgroundColor: "#2DDB81", // Background color on hover
                      color: "#0C0E0D",
                    },
                  },
                },
              },
            }}
          >
            {/* Placeholder as the default selected value */}
            <MenuItem value="" disabled sx={{ color: "#9AE1BC" }}>
              {placeholder || "Select an option"}
            </MenuItem>
            {options.map((option, index) => (
              <MenuItem key={index} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </SelectField>
        </Box>
      </Box>
      {meta.touched && meta.error ? (
        <Text fw="400" color="red" fs="0.75rem">
          {meta.error}
        </Text>
      ) : null}
      {/* You can still include details or helper text if needed */}
    </FormControl>
  );
}

SelectInput.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    })
  ).isRequired,
  required: PropTypes.bool,
  isPin: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  type: PropTypes.string,
  endAdornment: PropTypes.element,
  details: PropTypes.string,
  sx: PropTypes.object,
};
