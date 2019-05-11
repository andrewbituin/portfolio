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
        <Link to='/about'>
        <button type="button" className="home-header-button">
          About
        </button>
        </Link>
        <Link to='/resume'>
        <button type="button" className="home-header-button">
          Résumé
        </button>
        </Link>
        {/* <a href='https://github.com/andrewbituin' className="home-header-button">
          Github
        </a> */}
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
