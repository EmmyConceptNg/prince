import * as Yup from "yup";
import { Zoom, toast } from "react-toastify";
export const newsletterValidation = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
});


export const pinValidation = Yup.object({
  pin1: Yup.string().length(1, "Invalid"),
  pin2: Yup.string().length(1, "Invalid"),
  pin3: Yup.string().length(1, "Invalid"),
  pin4: Yup.string().length(1, "Invalid"),
});

export const loginValidation = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters long.")
    .matches(
      /[a-zA-Z]/,
      "Password must contain both upper and lower case letters."
    )
    .matches(/[0-9]+/, "Password must contain at least one number."),
});
export const businessNameValidation = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),

  name: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  no_employees: Yup.string().required("Required"),
  tel: Yup.string().required("Required"),
  founder_name: Yup.string().required("Required"),
  url: Yup.string().url("invalid url").required("Required"),
});

export const aiQuestionnaireValidation = Yup.object().shape({
  answer: Yup.string().required("Answer is required"),
});

export const passwordEmailValidation = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
});

export const userValidation = Yup.object({
  fullName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters long.")
    .matches(
      /[a-zA-Z]/,
      "Password must contain both upper and lower case letters."
    )
    .matches(/[0-9]+/, "Password must contain at least one number.")
    .matches(
      /[@$!%*?&#]+/,
      "Password must contain at least one special character (@, $, !, %, *, ?, &, #, _, etc.)."
    ),
});

export const passwordValidation = Yup.object({
  password: Yup.string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters long.")
    .matches(
      /[a-zA-Z]/,
      "Password must contain both upper and lower case letters."
    )
    .matches(/[0-9]+/, "Password must contain at least one number.")
    .matches(
      /[@$!%*?&#]+/,
      "Password must contain at least one special character (@, $, !, %, *, ?, &, #, _, etc.)."
    ),
  confirmPassword: Yup.string()
    .required("Password confirmation is required.")
    .oneOf([Yup.ref("password"), null], "Passwords must match."),
});








export const notify = (message, type) => {
  const notifyObject = {
    info: () =>
      toast.info(message, {
        position: "top-right",
        autoClose: 2000,
        toastId: "01",
        transition: Zoom,
      }),

    success: () =>
      toast.success(message, {
        position: "top-right",
        autoClose: 2000,
        toastId: "02",
        transition: Zoom,
      }),

    warn: () =>
      toast.warn(message, {
        position: "top-right",
        autoClose: 2000,
        toastId: "03",
        transition: Zoom,
      }),

    error: () =>
      toast.error(message, {
        position: "top-right",
        autoClose: 4000,
        toastId: "04",
        transition: Zoom,
      }),
  }[type]();
};

 export const stripHtmlTags = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };