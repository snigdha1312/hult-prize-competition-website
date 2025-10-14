import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">
          IITB <span>Competition</span>
        </h2>
      </div>

      <ul className="navbar-links">
        <li><NavLink to="/" end>Home</NavLink></li>
    
        <li><NavLink to="/team">Team</NavLink></li>
        <li><NavLink to="/competitions">Competitions</NavLink></li>
        <li><NavLink to="/how-it-works">How It Works</NavLink></li>
        <li><NavLink to="/register" className="register-link">Register</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;

