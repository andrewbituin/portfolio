import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  function generateNavButtons() {
    return (
      <nav className="home-nav-bar">
        <Link to="/">
          <div className="home-header-button">
            Home
          </div>
        </Link>
        <Link to='/about'>
        <div className="home-header-button">
          About
        </div>
        </Link>
        <Link to='/contact'>
        <div className="home-header-button">
          Contact
        </div>
        </Link>
        <Link to='/resume'>
        <div className="home-header-button">
          Résumé
        </div>
        </Link>
      </nav>
    );
  }

  return (
    <section className="home-header-container">
      <header className="home-header">
        <h1>
         I'm Andrew, a full stack web developer <br /> and avid learner of things.
        </h1>
        {generateNavButtons()}
      </header>
    </section>
  );
}
