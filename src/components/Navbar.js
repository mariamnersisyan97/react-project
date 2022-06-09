import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? "red" : "red",
    background: isActive ? "bisque" : "black",
    display: "inline-flex",
    width: "60px",
    padding: "14px",
    margin: "8px 8px 7px",
    textDecoration: "none",
  });
  return (
    <div className="navbar">
      <h1>
        <span className="logo" role="img">
          ⚡🌪 📜 Mythos
        </span>
      </h1>
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/gods" style={linkStyle}>
        Gods
      </NavLink>
      <NavLink to="/about" style={linkStyle}>
        About
      </NavLink>
    </div>
  );
}

export default Navbar;
