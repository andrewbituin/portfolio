import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";

export default function Prefcards() {
  return (
    <>
      <Nav />
      <header className="prefcards-header">
        <h1 className="prefcards-title">PREFCARDS</h1>
        <h3 className="prefcards-blurb">
        An app for surgical teams
        </h3>
        <div className="prefcards-links-container">
          <a href="https://prefcards-armory.now.sh/">
            <div className="prefcards-link">Live App</div>
          </a>
          <a href="https://github.com/thinkful-ei-armadillo/The-Armory-Client">
            <div className="prefcards-link">Client Repo</div>
          </a>
          <a href="https://github.com/thinkful-ei-armadillo/The-Armory-Server">
            <div className="prefcards-link">Server Repo</div>
          </a>
        </div>
      </header>
      <section className="prefcards-image-container">
        <div>
          <img
            src=''
            alt="A screenshot of Prefcards Armory"
            className="project-screenshot"
          />
        </div>
        <div>
          <img
            src=''
            alt="A screenshot of Prefcards Armory"
            className="project-screenshot"
          />
        </div>
      </section>
      <section className="prefcards-description">
        <p>
          Finding friends to play online video games with is hard. Sometimes
          life gets in the way and schedules don't line up. Or maybe you just
          don't have any friends to begin with. Don't fret because that's where
          Prefcards Armory comes in!
        </p>
        <p>
          Find your favorite game and join a prefcards that's looking exactly for
          whatever role you play. Can't find one that's right for you? Create
          your own prefcards and find your perfect teammates! Whether you're looking
          for something more casual or more competitive, you can be as general
          or as specific as you'd like when creating a prefcards. Chat with your new
          prefcardsmates within the app and plan out your gaming session. Prefcards up
          and join Prefcards Armory!
        </p>
        <h4>TECH STACK</h4>
        <ul>
          <li>React</li>
          <li>React Hooks</li>
          <br />
          <li>Socketio</li>
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
