import React from "react";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from './components/Footer';

import "./Home.css";

import squad from "./squadarmory-logo.png";
import squad2 from "./squad2.png";

import learnjs from "./learnjs-logo.png";
import learnjs2 from "./learnjs2.png";

import petful from "./petful-logo.png";

import prefcards from "./prefcards-logo.png";
import prefcards2 from "./prefcards-logo2.png";
import prefcards3 from "./prefcards3.png";

export default function Home() {
  // https://squad-armory.now.sh/
  // https://github.com/thinkful-ei-armadillo/The-Armory-Client
  function generateProjects() {
    return (
      <>
        <div classname="squadArmory">
          <Link to="/squad-armory">
            <img src={squad} alt="project-pic" className="project-holder" />
          </Link>
        </div>
        <Link to="/prefcards">
          <div className="prefcards">
            <img
              src={prefcards3}
              alt="project-pic"
              className="project-holder"
            />
          </div>
        </Link>
        <Link to="/learnjs">
          <div className="learnjs">
            <img src={learnjs2} alt="project-pic" className="project-holder" />
          </div>
        </Link>
        <Link to="/petful">
          <div classname="petful">
            <img src={petful} alt="project-pic" className="project-holder" />
          </div>
        </Link>
      </>
    );
  }

  function generateBlurb() {
    return (
      <div className="blurb-container">
        <p>
          I love to learn. I find the most meaning in learning new things, in creating new things. I feel so lucky to have fallen into the world of
          programming because everyday I'm learning something new or improving
          on a skill I already knew before.
        </p>
        <ul>
          Tech
          <li>React</li>
        </ul>
      </div>
    );
  }

  return (
    <>
      <Nav />
      <section className="project-container">
        {generateProjects()}
        {generateBlurb()}
      </section>
      <Footer />
    </>
  );
}
