import React from "react";
import * as yup from "yup";
import "./Register.css";
import withForm from "../shared/hocs/withForm";

class Register extends React.Component {
  emailOnChangeHandler = this.props.controlChangeHandlerFactory("email");
  passwordOnChangeHandler = this.props.controlChangeHandlerFactory("password");
  rePasswordOnChangeHandler = this.props.controlChangeHandlerFactory("rePassword");

  submitHandler = () => {
    // const { email, password, rePassword } = this.props.getFormState();
    // console.log(email, password, rePassword);
    this.props.runValidations(); //.then((formData) => console.log(formData));
  };

  getFirstInputError = (name) => {
    const errorState = this.props.getErrorsState();
    return errorState && errorState[name] && errorState[name][0];
  };

  render() {
    const emailError = this.getFirstInputError("email");
    const passwordError = this.getFirstInputError("password");
    const rePasswordError = this.getFirstInputError("rePassword");

    return (
      <div className="Register">
        <h1>Register Page</h1>
        <form>
          <div className="form-control">
            <label>Email</label>
            <input type="email" onChange={this.emailOnChangeHandler}></input>
            {emailError && <div className="error">{emailError}</div>}
          </div>
          <div className="form-control">
            <label>Password</label>
            <input type="password" onChange={this.passwordOnChangeHandler}></input>
            {passwordError && <div className="error">{passwordError}</div>}
          </div>
          <div className="form-control">
            <label>Re-password</label>
            <input type="password" onChange={this.rePasswordOnChangeHandler}></input>
            {rePasswordError && <div className="error">{rePasswordError}</div>}
          </div>
          <div className="form-control">
            <button type="button" onClick={this.submitHandler}>
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const initialFormState = {
  email: "",
  password: "",
  rePassword: ""
};

const schema = yup.object({
  // username: yup
  //   .string("Username shoud be a string")
  //   .required("Username is required")
  //   .min(4, "Username should be more than 4 chars"),

  email: yup
    .string("Email must be a string")
    .required("Email is required")
    .email("Email is invalid"),

  password: yup
    .string("Password must be a string")
    .required("Password is required")
    .min(6, "Password must be more than 6 chars"),

  rePassword: yup
    .string("Password must be a string")
    .oneOf([yup.ref("password"), null], "Passwords don't match")
    .required("Re-password is required")
    .min(6, "Re-password must be more than 6 chars")
});

export default withForm(Register, initialFormState, schema);
