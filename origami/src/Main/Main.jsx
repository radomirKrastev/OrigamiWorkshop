import React from "react";
import "./Main.css";

function Main({ children }) {
  return (
    <main className="Main">
      <h1>{children}</h1>
    </main>
  );
}

export default Main;
