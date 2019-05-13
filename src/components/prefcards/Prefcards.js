import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import "./Prefcards.css";

import prefcardsExample from "./prefcardsExample.png";
import prefcardsList from "./prefcardsList.png";
import prefcards from '../.././prefcards3.png';

export default function Prefcards() {
  return (
    <>
      <Nav />
      <header className="prefcards-header">
      <img
              src={prefcards}
              alt="project-pic"
              className="project-holder-page"
            />
        {/* <h3 className="prefcards-blurb">An app for surgical teams</h3> */}
        <div className="prefcards-links-container">
          <a href="https://prefcards.fandrewbituin.now.sh/">
            <div className="prefcards-link">Live App</div>
          </a>
          <a href="https://github.com/andrewbituin/prefcards-client">
            <div className="prefcards-link">Client Repo</div>
          </a>
          <a href="https://github.com/andrewbituin/prefcards-api">
            <div className="prefcards-link">Server Repo</div>
          </a>
        </div>
      </header>
      <section className="prefcards-image-container">
        <div>
          <img
            src={prefcardsList}
            alt="A screenshot of Prefcards Armory"
            className="project-screenshot"
          />
        </div>
        <div>
          <img
            src={prefcardsExample}
            alt="A screenshot of Prefcards Armory"
            className="project-screenshot"
          />
        </div>
      </section>
      <section className="prefcards-description">
        <p>
          Prefcards helps surgical teams maintain consistent and accurate
          surgical preference cards. Preference cards play an integral role in
          the lead up to any surgery; they help the team properly prepare
          equipment, supplies, medications, etc. based on the preferences of the
          surgeon on the case. A number of hospitals use outdated systems for
          tracking and updating preference cards, leading to inconsistencies
          from one case to the next and creating problems when new staff members
          join the team. Prefcards' strength is in its simplicity. View, create
          and edit preference cards easily through an intutive interface.
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
