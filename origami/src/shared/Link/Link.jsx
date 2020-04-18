import React from "react";
import "./Link.css";
import { Link as LinkReactDomRouter } from "react-router-dom";

function Link({ to, children }) {
  return (
    <li className="listItem">
      <LinkReactDomRouter to={to}>{children}</LinkReactDomRouter>
    </li>
  );
}

export default Link;
