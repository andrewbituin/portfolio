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
          I'm a full-stack web developer who is passionate about learning
          and coding. I strive to write clean, testable code. I design
          mobile-first responsive web applications and I am experienced in
          test-driven development.
        </p>
        <p>
          When I'm not obsessively going over code, I enjoy reading science
          fiction and fantasy books. I like to write. Some of my favorite TV
          shows are Game of Thrones (barring this last season) and Parks and Rec.
          Favorite movies at the moment include Blade Runner 2049 and Dumb and
          Dumber. Also, I like food a lot. I love cooking and trying delicious
          places to eat.
        </p>
        <p>
          I'm always open to giving and receiving recommendations for any of
          these things just mentioned.
        </p>
      </section>
      <Footer />
    </>
  );
}
