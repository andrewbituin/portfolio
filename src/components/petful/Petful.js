import React from "react";
import Footer from "../Footer";
import petfulDashboard from "./petful-dashboard.png";

import "./Petful.css";
import Initials from '../initials/Initials';

export default function Petful() {
  return (
    <>
      <div className="initials-container">
        <h1 className="A-initials">
          A<span className="B-initials">B</span>.
        </h1>
        <Initials />
      </div>
      <header className="petful-header">
        <h1>PETFUL</h1>
        {/* <h3 className="petful-blurb">
          Find friends to play with in your favorite online multiplayer games!
        </h3> */}
      </header>
      <section className="petful-image-container">
        <div>
          <img
            src={petfulDashboard}
            alt="A screenshot of Petful"
            className="project-screenshot"
          />
        </div>
      </section>
      <div className="petful-links-container">
        <a href="https://andrew-alex-petful.now.sh/">
          <div className="petful-link">LIVE APP</div>
        </a>
        <a href="https://github.com/andrewbituin/petful-client">
          <div className="petful-link">CLIENT REPO</div>
        </a>
        <a href="https://github.com/andrewbituin/petful-server">
          <div className="petful-link">SERVER REPO</div>
        </a>
      </div>
      <section className="petful-description">
        <p>
          Pet-O-Rama 5001 is an app that helps connect pets who are up for
          adoption with their future forever homes! We want all pets at
          Pet-O-Rama 5001 to find a home. With that in mind, we've designed our
          app so that the cats and dogs who have arrived first at our animal
          shelter have first priority in the adoption process. As such, pets
          that are first in line must be adopted before any other pets can be
          selected for adoption. This ensures all of our lovely pets find a home
          as quick as possible. Similarly, as a user, you will be put into a
          queue behind other users in the order of registration.
        </p>
        <p />
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
