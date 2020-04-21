import React from "react";
import "./Login";

import withForm from "../shared/hocs/withForm";

class Login extends React.Component {
  usernameChangeHandler = this.props.controlChangeHandlerFactory("username");
  passwordChangeHandler = this.props.controlChangeHandlerFactory("password");

  submitHandler = () => {
    const errors = this.props.getErrorsState();
    if (!!errors) {
      return;
    }
    const data = this.props.getFormState();
    this.props.login(this.props.history, data);
  };

  render() {
    return (
      <div className="Login">
        <h1>Login Page</h1>
        <form>
          <div className="form-control">
            <label>Email</label>
            <input type="text" onChange={this.usernameChangeHandler}></input>
          </div>
          <div className="form-control">
            <label>Password</label>
            <input type="password" onChange={this.passwordChangeHandler}></input>
          </div>
          <div className="form-control">
            <button type="button" onClick={this.submitHandler}>
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withForm(Login, { username: "", password: "" });
