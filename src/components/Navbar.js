import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h1>
        <span className="logo" role="img">
          ⚡🌪 📜 Mythos
        </span>
      </h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/addGod">Add a God</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
}

export default Navbar;
