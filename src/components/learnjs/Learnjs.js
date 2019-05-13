import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import learnjs from "../../learnjs2.png";
import learn from './learnjs-learn.png';
import learnjsDashboard from './learnjs-dashboard.png';

import "./Learnjs.css";

export default function Learnjs() {
  return (
    <>
      <Nav />
      <header className="learnjs-header">
        <img src={learnjs} alt="project-pic" className="project-holder-page" />
        {/* <h3 className="learnjs-blurb">
          Find friends to play with in your favorite online multiplayer games!
        </h3> */}
        <div className="learnjs-links-container">
          <a href="https://andrew-daniel-spaced-repetition.now.sh/">
            <div className="learnjs-link">Live App</div>
          </a>
          <a href="https://github.com/andrewbituin/learnjs-client">
            <div className="learnjs-link">Client Repo</div>
          </a>
          <a href="https://github.com/andrewbituin/learnjs-server">
            <div className="learnjs-link">Server Repo</div>
          </a>
        </div>
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
      <section className="learnjs-description">
        <p>
          Learn.js is a demonstration of our ability to construct an application
          using a spaced repetition algorithm to help users learn JavaScript!
        </p>
        <h4>TECH STACK</h4>
        <ul>
          <li>React</li>
          <br />
          <li>Node.js</li>
          <li>Express</li>
          <li>PostgreSQL</li>
        </ul>
      </section>
      <Footer />
    </>
  );
}
