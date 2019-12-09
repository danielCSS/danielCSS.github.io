import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ display: "flex" }}>
      <h1 style={{ padding: "1em", marginRight: "auto" }}>Todo App</h1>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </header>
  );
}

export default Header;
