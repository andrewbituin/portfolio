import React from "react";
import { Link } from "react-router-dom";

export default function NavButtons() {
  return (
    <div className="nav-bar">
      <nav className="home-nav-bar">
        <Link to="/">
          <div className="home-header-button">Home</div>
        </Link>
        <Link to="/about">
          <div className="home-header-button">About</div>
        </Link>
        <Link to="/contact">
          <div className="home-header-button">Contact</div>
        </Link>
        {/* <Link to='/resume'>
        <div className="home-header-button">
          Résumé
        </div>
        </Link> */}
      </nav>
    </div>
  );
}
