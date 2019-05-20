import React from "react";
import { Link } from "react-router-dom";
import NavButtons from "./NavButtons";
import Initials from "./initials/Initials";

export default function Nav() {


  return (
    <>
    <Initials />
    <div className="nav-bar">
    </div>
    <section className="home-header-container">
      <header className="home-header">
        <h1>
         Hi there! <br></br> I'm <span className="name-andrew">Andrew</span>.
        </h1>
        <p className="header-blurb">I'm a full stack web developer who's passionate about learning and programming.</p>
      </header>
    </section>
    </>
  );
}
