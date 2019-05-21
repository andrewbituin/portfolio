import React from "react";
import { Link } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from './components/Footer';

import "./Home.css";

import squad from "./squadarmory-logo.png";

import learnjs2 from "./learnjs2.png";

import petful from "./petful-logo.png";


import prefcards3 from "./prefcards3.png";


export default function Home() {
  // https://squad-armory.now.sh/
  // https://github.com/thinkful-ei-armadillo/The-Armory-Client
  function generateProjects() {
    return (
      <>
        <div className="squadArmory">
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

  return (
    <>
      <Nav />
      <section className="project-container">
        {generateProjects()}
      </section>
      <Footer />
    </>
  );
}
