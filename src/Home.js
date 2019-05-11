import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import prefcards from "./prefcards-logo.png";
import learnjs from "./learnjs-logo.png";
import squad from "./squadarmory-logo.png";
import Nav from "./components/Nav";
import petful from './petful-logo.png'
import prefcards2 from './prefcards-logo2.png';
import squad2 from './squad2.png';
import learnjs2 from './learnjs2.png';
import prefcards3 from './prefcards3.png';

export default function Home(props) {
  // https://squad-armory.now.sh/
  // https://github.com/thinkful-ei-armadillo/The-Armory-Client
  function generateProjects() {
    return (
      <>
          <div classname="squadArmory">
        <Link to="/squad-armory">
            <img src={squad2} alt="project-pic" className="project-holder" />
        </Link>
          </div>
        <Link to="/prefcards">
          <div className="prefcards">
            <img src={prefcards3} alt="project-pic" className="project-holder" />
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
        <p></p>
      </section>
      <section>
        <footer>
          <div />

          <div />
        </footer>
      </section>
    </>
  );
}
