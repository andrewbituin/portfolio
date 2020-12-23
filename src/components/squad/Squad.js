import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import squadDesktop from "./squadDesktop.png";
import squadList from "./squadList.png";
import "./Squad.css";
import Initials from '../initials/Initials';

export default function Squad() {
  return (
    <>
      {/* <Nav /> */}
      <div className="initials-container">
        <h1 className="A-initials">
          A<span className="B-initials">B</span>.
        </h1>
        <Initials />
      </div>
      <header className="squad-header">
        <h1>THE ARMORY</h1>
        {/* <h3 className="squad-blurb">
          Find friends to play with in your favorite online multiplayer games!
        </h3> */}
      </header>
      <section className="squad-image-container">
        <div>
          <img
            src={squadDesktop}
            alt="A screenshot of Squad Armory"
            className="project-screenshot"
          />
        </div>
        <div>
          <img
            src={squadList}
            alt="A screenshot of Squad Armory"
            className="project-screenshot"
          />
        </div>
      </section>
      <div className="squad-links-container">
        <a href="https://squad-armory.now.sh/" target="_blank" rel="noopener noreferrer">
          <div className="squad-link">LIVE APP</div>
        </a>
        <a href="https://github.com/andrewbituin/armorychat" target="_blank" rel="noopener noreferrer">
          <div className="squad-link">CLIENT REPO</div>
        </a>
        <a href="https://github.com/thinkful-ei-armadillo/The-Armory-Server" target="_blank" rel="noopener noreferrer">
          <div className="squad-link">SERVER REPO</div>
        </a>
      </div>
      <section className="squad-description">
        <p>
          Finding friends to play online video games with is hard. Sometimes
          life gets in the way and schedules don't line up. Or maybe you just
          don't have any friends to begin with. Don't fret because that's where
          Squad Armory comes in!
        </p>
        <p>
          Find your favorite game and join a squad that's looking exactly for
          whatever role you play. Can't find one that's right for you? Create
          your own squad and find your perfect teammates! Whether you're looking
          for something more casual or more competitive, you can be as general
          or as specific as you'd like when creating a squad. Chat with your new
          squadmates within the app and plan out your gaming session. Squad up
          and join Squad Armory!
        </p>
        <h4>TECH STACK</h4>
        <ul>
          <li>React</li>
          <li>React Hooks</li>
          <li>Socketio</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>PostgreSQL</li>
        </ul>
      </section>
      <Footer />
    </>
  );
}
