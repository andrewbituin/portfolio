import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import learn from "./learnjs-learn.png";
import learnjsDashboard from "./learnjs-dashboard.png";
import Initials from '../initials/Initials';

import "./Learnjs.css";

export default function Learnjs() {
  return (
    <>
      <div className="initials-container">
        <h1 className="A-initials">
          A<span className="B-initials">B</span>.
        </h1>
        <Initials />
      </div>
      <header className="learnjs-header">
        <h1>LEARNJS</h1>
        {/* <h3 className="learnjs-blurb">
          Find friends to play with in your favorite online multiplayer games!
        </h3> */}
      </header>
      <section className="learnjs-image-container">
        <div>
          <img
            src={learnjsDashboard}
            alt="A screenshot of Learnjs Armory"
            className="project-screenshot"
          />
        </div>
        <div>
          <img
            src={learn}
            alt="A screenshot of Learnjs Armory"
            className="project-screenshot"
          />
        </div>
      </section>
      <div className="learnjs-links-container">
        <a href="https://learnjs-app.now.sh/" target="_blank" rel="noopener noreferrer">
          <div className="learnjs-link">LIVE APP</div>
        </a>
        <a href="https://github.com/andrewbituin/learnjs-client" target="_blank" rel="noopener noreferrer">
          <div className="learnjs-link">CLIENT REPO</div>
        </a>
        <a href="https://github.com/andrewbituin/learnjs-server" target="_blank" rel="noopener noreferrer">
          <div className="learnjs-link">SERVER REPO</div>
        </a>
      </div>
      <section className="learnjs-description">
        <p>
          Learn.js is a demonstration of our ability to construct an application
          using a spaced repetition algorithm to help users learn JavaScript!
        </p>
        <h4>TECH STACK</h4>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>PostgreSQL</li>
        </ul>
      </section>
      <Footer />
    </>
  );
}
