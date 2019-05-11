import React from "react";
import Nav from "./Nav";
import squadDesktop from "../squadDesktop.png";
import squadList from "../squadList.png";
import "./Squad.css";

export default function Squad() {
  return (
    <>
      <Nav />
      <h1>Squad Armory</h1>
      <img
        src={squadDesktop}
        alt="A screenshot of Squad Armory"
        className="project-screenshot"
      />
      <img
        src={squadList}
        alt="A screenshot of Squad Armory"
        className="project-screenshot"
      />
    </>
  );
}
