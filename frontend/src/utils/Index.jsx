import * as Yup from "yup";
export const newsletterValidation = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
});
