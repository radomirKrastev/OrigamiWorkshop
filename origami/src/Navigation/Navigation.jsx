import React from "react";
import "./Navigation.css";
import Link from "../shared/Link/Link.jsx";

function Navigation({ isLogged }) {
  return (
    <nav className="Navigation">
      <ul>
        <Link to={"/"}>
          <img id="logo" src={"white-origami-bird.png"} alt="logo"></img>
        </Link>
        {isLogged && <Link to="/create-posts">New Post</Link>}
        {isLogged && <Link to="/profile">Profile</Link>}
        {!isLogged && <Link to="/register">Register</Link>}
        {!isLogged && <Link to="/login">Login</Link>}
        {isLogged && <Link to="/logout">Logout</Link>}
      </ul>
    </nav>
  );
}

export default Navigation;
