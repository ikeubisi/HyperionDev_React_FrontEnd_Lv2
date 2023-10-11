import { useFormik } from "formik";
import * as Yup from "yup";
// Styles just for login & register pages
import "../../styles/users.css";

export default function RegisterPage() {
  // Formik used to give users feedback over errors
  // Majority of code based off https://formik.org/docs/tutorial
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    // Yup used for validating objects entered
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        // Password regular expression check taken from
        // V, S.V. et al. (1965) Formik, yup password strength validation with react, Stack Overflow.
        // Available at: https://stackoverflow.com/questions/55451304/formik-yup-password-strength-validation-with-react
        // (Accessed: 11 October 2023).
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
          "Must Contain At Least 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        )
        .required("Required"),
      passwordConfirm: Yup.string()
        // Password match check learned from
        // Strahinja AjvazStrahinja Ajvaz&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2 et al. (1964) Password validation with Yup and Formik, Stack Overflow.
        // Available at: https://stackoverflow.com/questions/49502436/password-validation-with-yup-and-formik
        // (Accessed: 11 October 2023).
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <h1>Register</h1>
      <hr />
      <h5>
        Passwords must be at least 8 characters long, have at least 1 upper case
        and 1 lower case letter and have at least 1 special character eg `!`.
      </h5>
      <form onSubmit={formik.handleSubmit} className="mt-3">
        <div className="column">
          <div className="form-group col">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              // ...formik.getFieldProps() method returns to you the exact group of onChange,
              // onBlur, and value, checked for a given field
              {...formik.getFieldProps("firstName")}
              className="m-2"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="fw-bold text-danger mb-1">
                {formik.errors.firstName}
              </div>
            ) : null}
          </div>

          <div className="column">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              {...formik.getFieldProps("lastName")}
              className="m-2"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="fw-bold text-danger mb-1">
                {formik.errors.lastName}
              </div>
            ) : null}
          </div>

          <div className="column">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="e.g. bob@email.com"
              {...formik.getFieldProps("email")}
              className="m-2"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="fw-bold text-danger mb-1">
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          <div className="column">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              {...formik.getFieldProps("password")}
              className="m-2"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="fw-bold text-danger mb-1">
                {formik.errors.password}
              </div>
            ) : null}
          </div>

          <div className="column">
            <label htmlFor="passwordConfirm">Password Again</label>
            <input
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              {...formik.getFieldProps("passwordConfirm")}
              className="m-2"
            />
            {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
              <div className="fw-bold text-danger mb-1">
                {formik.errors.passwordConfirm}
              </div>
            ) : null}
          </div>
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
