import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import "./Work.css";
import Initials from "../initials/Initials";
import casino1 from "../work/casinoApp.png";
import casino2 from "../work/casinoAppHoriz.png";

export default function Work() {
  return (
    <>
      <div className="initials-container">
        <h1 className="A-initials">
          A<span className="B-initials">B</span>.
        </h1>
        <Initials />
      </div>
      <header className="prefcards-header">
        <h1>WORK PROJECTS</h1>
        {/* <h3 className="prefcards-blurb">An app for surgical teams</h3> */}
      </header>
      <section className="work-image-container">
        <div>
          <img alt="project-pic" src={casino1} className="casino1" />
          <h3>Vertical slot machine service window web app</h3>
        </div>
        <div>
          <img alt="project-pic" src={casino2} className="casino2" />
          <h3>Horizontal slot machine service window web app</h3>
        </div>
        {/* <div>
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
        </div> */}
      </section>
      <section className="prefcards-description">
        <p>
          As a software engineer in the casino gaming industry, I develop
          front-end content for slot machines' browser based player window using Vue.js,
          JavaScript, HTML5 and CSS3. For any customer, I build out 8 separate
          sets of content in different resolutions to support the varying sizes
          of slot machines' screens. Therefore, I use a mobile first approach to
          development as responsive design is paramount to building these
          projects efficiently and effectively.
        </p>
        <h4>TECH STACK</h4>
        <ul>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Vue.js</li>
        </ul>
      </section>
      <Footer />
    </>
  );
}
