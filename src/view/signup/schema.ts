import { PassThrough } from "stream";
import { object, string } from "yup";

export const signUpSchema = object({
  email: string()
    .trim()
    .email("Invalid Email")
    .required("Email cannot be empty"),
  password: string()
    .trim()
    .min(6, "Password must be 6 characters at minimum")
    .required("Password cannot be empty"),
  firstname: string().trim().required("Firstname cannot be empty"),
});

export const logInSchema = object({
  email:string()
  .trim()
  .email("Wrong Email, check again")
  .required("Email cannot be empty"),
  password:string()
  .trim()
  .min(6, "Password must be 6 characters at minimum")
  .required("Wrong password, check again")
});