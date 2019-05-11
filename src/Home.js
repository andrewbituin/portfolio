import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import prefcards from "./prefcards-logo.png";
import learnjs from "./learnjs-logo.png";
import squad from "./squadarmory-logo.png";

export default function Home(props) {
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

  // https://squad-armory.now.sh/
  // https://github.com/thinkful-ei-armadillo/The-Armory-Client
  function generateProjects() {
    return (
      <>
        <Link to="/squad-armory">
          <div classname="squadArmory">
            <img src={squad} alt="project-pic" className="project-holder" />
            <div className="overlay" />
          </div>
        </Link>

        <img src={prefcards} alt="project-pic" className="project-holder" />
        <img src={learnjs} alt="project-pic" className="project-holder" />
      </>
    );
  }
  return (
    <>
      <section className="home-header-container">
        <header className="home-header">
          <h1>
            Hello! <br /> I'm Andrew, a full stack web developer.
          </h1>
          {generateNavButtons()}
        </header>
      </section>
      <section className="project-container">{generateProjects()}</section>
      <section>
        <footer>
          <div />

          <div />
        </footer>
      </section>
    </>
  );
}
