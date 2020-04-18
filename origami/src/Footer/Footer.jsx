import React from "react";
import "./Footer.css";
import Link from "../shared/Link/Link.jsx";

function Footer() {
  return (
    <footer className="Footer">
      <ul>
        {/* <LinkLogo logo={"white-origami-bird.png"} /> */}
        <Link to={"/post"}>Post</Link>
        <Link to={"/register"}>Register</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/profile"}>Profile</Link>
        <Link to={"/post"}>
          <img id="logo" src={"blue-origami-bird-flipped.png"} alt="logo"></img>
        </Link>
      </ul>
      <p>Software University © 2019</p>
    </footer>
  );
}

export default Footer;
