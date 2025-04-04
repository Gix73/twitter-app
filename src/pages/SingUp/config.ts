import { StylesConfig } from "react-select";

export const config = {
  header: "Create an account",
  placeholders: {
    namePlaceholder: "Name",
    phonePlaceholder: "Phone number",
    emailPlaceholder: "Email",
    passwordPlaceholder: "Password",
    confirmPlaceholder: "Confirm password",
  },
  emailUse: "Use Google",
  dateOfBirth: "Date of birth",
  text: "Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.",
  buttonText: "Next",
};

export const customStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    minHeight: "55px",
    width: "100%",
  }),
};
