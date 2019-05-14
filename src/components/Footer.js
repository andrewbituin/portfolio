import React from "react";

import github from "../github-logo.png";
import linkedin from "../linkedin-logo.png";
import instagram from "../instagram-logo.png";
import email from '../mail.png';

export default function Footer() {
  function generateFooter() {
    return (
      <footer>
        <div className="left-footer">
          <a href="https://www.github.com/andrewbituin">
            <img src={github} className="logo" />
          </a>
          <a href="https://www.linkedin.com/in/andrew-bituin">
            <img src={linkedin} className="logo" />
          </a>
          <a href="https://www.instagram.com/lil_bittyy_/">
            <img src={instagram} className="logo" />
          </a>
          <a href="mailto:fandrewbituin@gmail.com">
              <img src={email} className="logo" />
            </a>
        </div>
        <div className="right-footer" />
      </footer>
    );
  }
  return <>{generateFooter()}</>;
}
