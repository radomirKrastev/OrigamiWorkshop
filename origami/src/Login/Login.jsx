import React from "react";
import "./Login";

function Login() {
  return (
    <div className="Login">
      <h1>Login Page</h1>
      <form>
        <div className="form-control">
          <label>Email</label>
          <input type="text"></input>
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password"></input>
        </div>
        <div className="form-control">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
