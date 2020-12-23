import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";

import "./Home.css";

import squad from "../squad/squadarmory-logo.png";

import learnjs2 from "../learnjs/learnjs2.png";

import petful from "../petful/petful-logo.png";

import prefcards3 from "../prefcards/prefcards3.png";

export default function Home() {
  // https://squad-armory.now.sh/
  // https://github.com/thinkful-ei-armadillo/The-Armory-Client
  function generateProjects() {
    return (
      <>
        <div className="link-container">
          <Link to="/work">
            <h2>WORK PROJECTS</h2>
          </Link>
          <Link to="/the-armory">
            <h2 className="squadArmory">THE ARMORY</h2>
          </Link>
          <Link to="/prefcards">
            <h2 className="prefcards">PREFCARDS</h2>
          </Link>
        </div>

        {/* <Link to="/learnjs">
          <div className="learnjs">
            <img src={learnjs2} alt="project-pic" className="project-holder" />
          </div>
        </Link> */}
        {/* <Link to="/petful">
          <div classname="petful">
            <img src={petful} alt="project-pic" className="project-holder" />
          </div>
        </Link> */}
      </>
    );
  }

  return (
    <>
      <Nav />
      <section className="project-container">{generateProjects()}</section>
      <Footer />
    </>
  );
}
