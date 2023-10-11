import { useFormik } from "formik";
import * as Yup from "yup";

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
      <form onSubmit={formik.handleSubmit}>
        <div className="column">
          <div className="form-group col">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className="m-2"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
          </div>

          <div className="column">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className="m-2"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}
          </div>

          <div className="column">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className="m-2"
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="column">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="m-2"
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="column">
            <label htmlFor="passwordConfirm">Password Again</label>
            <input
              id="passwordConfirm"
              name="passwordConfirm"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.passwordConfirm}
              className="m-2"
            />
            {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
              <div>{formik.errors.passwordConfirm}</div>
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
