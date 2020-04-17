import React from "react";
import "./Link.css";

function LinkLogo({ logo }) {
  return (
    <li className="listItem">
      <a href="/">
        <img id="logo" src={logo} alt="logo"></img>
      </a>
    </li>
  );
}

export default LinkLogo;
