import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  function generateNavButtons() {
    return (
      <nav className="home-nav-bar">
        <Link to="/">
          <button type="button" className="home-header-button">
            Home
          </button>
        </Link>
        <button type="button" className="home-header-button">
          About
        </button>
        <button type="button" className="home-header-button">
          Résumé
        </button>
        <button type="button" className="home-header-button">
          Github
        </button>
      </nav>
    );
  }

  return (
    <section className="home-header-container">
      <header className="home-header">
        <h1>
          Hello! <br /> I'm Andrew, a full stack web developer.
        </h1>
        {generateNavButtons()}
      </header>
    </section>
  );
}
