import React from "react";
import "./Aside.css";
import Link from "../shared/Link/Link.jsx";

function Aside({ isLogged }) {
  return (
    <aside className="Aside">
      <ul>
        {isLogged && <Link to="/create-posts">New Post</Link>}
        {isLogged && <Link to="/profile">Profile</Link>}
        {!isLogged && <Link to="/register">Register</Link>}
        {!isLogged && <Link to="/login">Login</Link>}
      </ul>
    </aside>
  );
}

export default Aside;
