import React from "react";
import "./Aside.css";
import Link from "../shared/Link/Link.jsx";

function Aside() {
  return (
    <aside className="Aside">
      <ul>
        <Link to={"/post"}>Post</Link>
        <Link to={"/register"}>Register</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/profile"}>Profile</Link>
      </ul>
    </aside>
  );
}

export default Aside;
