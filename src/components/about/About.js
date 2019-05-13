import React from "react";
import Nav from "../Nav";
import Footer from "../Footer";
import profile from "./profile.jpg";
import "./About.css";

export default function About() {
  return (
    <>
      <Nav />
      <header className="profile-container">
        <img src={profile} alt="a picture of andrew" className="profile" />
      </header>
      <section className="about-section">
        <p>
          Full-stack JavaScript developer who is passionate about learning and
          coding. Skilled in writing clean, testable code. Proficient in
          designing mobile-first responsive web applications. Experienced in
          test-driven development.
        </p>
      </section>
      <Footer />
    </>
  );
}
