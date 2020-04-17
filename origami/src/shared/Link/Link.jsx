import React from "react";
import "./Link.css";

function Link({ linkNumber }) {
  return (
    <li className="listItem">
      <a href="/">Going to {linkNumber}</a>
    </li>
  );
}

export default Link;
