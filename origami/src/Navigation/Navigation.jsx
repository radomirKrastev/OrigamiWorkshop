import React from "react";
import "./Navigation.css";
import Link from "../shared/Link/Link.jsx";
import LinkLogo from "../shared/Link/LinkLogo.jsx";
// import logo from "../images";

const links = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const renderLinks = (links) => {
  return links.map((link) => {
    return <Link key={link} linkNumber={link} />;
  });
};

function Navigation() {
  return (
    <nav className="Navigation">
      <ul>
        <LinkLogo logo={"white-origami-bird.png"} />
        {renderLinks(links)}
      </ul>
    </nav>
  );
}

export default Navigation;
