import React from "react";
import "./Footer.css";
import Link from "../shared/Link/Link.jsx";
import LinkLogo from "../shared/Link/LinkLogo.jsx";

const links = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const renderLinks = (links) => {
  return links.map((link) => {
    return <Link key={link} linkNumber={link} />;
  });
};

function Footer() {
  return (
    <nav className="Footer">
      <ul>
        {/* <LinkLogo logo={"white-origami-bird.png"} /> */}
        {renderLinks(links)}
        <LinkLogo logo={"blue-origami-bird-flipped.png"} />
      </ul>
      <p>Software University © 2019</p>
    </nav>
  );
}

export default Footer;
