import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="Register">
      <h1>Register Page</h1>
      <form>
        <div className="form-control">
          <label>Email</label>
          <input type="email"></input>
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password"></input>
        </div>
        <div className="form-control">
          <label>Re-password</label>
          <input type="password"></input>
        </div>
        <div className="form-control">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
