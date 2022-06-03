import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h1>Navbar</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/gods">Gods</NavLink>
      <NavLink to="/addGod">Add a God</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
}
export default Navbar;
