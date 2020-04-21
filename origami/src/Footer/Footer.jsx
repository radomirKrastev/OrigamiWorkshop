import React from "react";
import "./Footer.css";
import Link from "../shared/Link/Link.jsx";

function Footer({ isLogged }) {
  return (
    <footer className="Footer">
      <ul>
        {isLogged && <Link to="/create-posts">New Post</Link>}
        {isLogged && <Link to="/profile">Profile</Link>}
        {!isLogged && <Link to="/register">Register</Link>}
        {!isLogged && <Link to="/login">Login</Link>}
        <Link to={"/"}>
          <img id="logo" src={"blue-origami-bird-flipped.png"} alt="logo"></img>
        </Link>
      </ul>
      <p>Software University © 2019</p>
    </footer>
  );
}

export default Footer;
