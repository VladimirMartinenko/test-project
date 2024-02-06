import * as yup from "yup";

export const REGISTRATION_CHEMA = yup.object({
  email: yup
    .string("Must be string")
    .email("Enter email")
    .matches(
      /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
      "Not a valid email"
    )
    .min(2, "Must be longer than 2 characters")
    .max(100, "Nice try, nobody has a first name that long")
    .required("Can't be empty"),
  name: yup
    .string("Must be string")
    .min(2, "Must be longer than 2 characters")
    .max(60, "Nice try, nobody has a first name that long")
    .required("Can't be empty"),
  phone: yup
    .string("Must be number")
    .matches(/^[\+]{0,1}380([0-9]{9})$/, "Not a valid number")
    .required("Can't be empty"),
  photo: yup.string().required("Can't be empty"),
  position_id: yup
    .string()
    .required("Can't be empty"),
});
