import React from "react";
import "./Aside.css";
import Link from "../shared/Link/Link.jsx";

const links = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const renderLinks = (links) => {
  return links.map((link) => {
    return <Link key={link} linkNumber={link} />;
  });
};

function Aside() {
  return (
    <aside className="Aside">
      <ul>{renderLinks(links)}</ul>
    </aside>
  );
}

export default Aside;
