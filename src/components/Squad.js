import React from "react";
import Nav from "./Nav";
import squadDesktop from "../squadDesktop.png";
import squadList from "../squadList.png";
import "./Squad.css";

export default function Squad() {
  return (
    <>
      <Nav />
      <h1 className="squad-title">Squad Armory</h1>
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
    </>
  );
}
