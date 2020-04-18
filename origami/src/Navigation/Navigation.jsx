import React from "react";
import "./Navigation.css";
import Link from "../shared/Link/Link.jsx";

function Navigation() {
  return (
    <nav className="Navigation">
      <ul>
        <Link to={"/"}>
          <img id="logo" src={"white-origami-bird.png"} alt="logo"></img>
        </Link>
        <Link to={"/post"}>Post</Link>
        <Link to={"/register"}>Register</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/profile"}>Profile</Link>
      </ul>
    </nav>
  );
}

export default Navigation;
