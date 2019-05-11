import React from 'react';

export default function Squad() {
    function generateNavButtons() {
        return (
          <nav className="home-nav-bar">
            <button type="click" className="home-header-button">
              About
            </button>
            <button type="click" className="home-header-button">
              Résumé
            </button>
            <button type="click" className="home-header-button">
              Github
            </button>
          </nav>
        );
      }
    return(
        <section className="home-header-container">
        <header className="home-header">
          <h1>
            Hello! <br /> I'm Andrew, a full stack web developer.
          </h1>
          {generateNavButtons()}
        </header>
      </section>
    )
}