import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import prefcards from "./prefcards-logo.png";
import learnjs from "./learnjs-logo.png";
import squad from "./squadarmory-logo.png";
import Nav from './components/Nav';

export default function Home(props) {

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
      <Nav />
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
