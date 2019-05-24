import React from "react";

import github from "../logos/github-logo.png"
import linkedin from "../logos/linkedin-logo.png";
import instagram from "../logos/instagram-logo.png";
import email from '../logos/mail.png';

export default function Footer() {
  function generateFooter() {
    return (
      <footer>
        <div className="left-footer">
          <a href="https://www.github.com/andrewbituin">
            <img src={github} alt="github logo" className="logo" />
          </a>
          <a href="https://www.linkedin.com/in/andrew-bituin">
            <img src={linkedin} alt="linkedin logo" className="logo" />
          </a>
          <a href="https://www.instagram.com/lil_bittyy_/">
            <img src={instagram} alt="instagram logo" className="logo" />
          </a>
          <a href="mailto:fandrewbituin@gmail.com">
              <img src={email} alt="email logo" className="logo" />
            </a>
        </div>
        <div className="right-footer" />
      </footer>
    );
  }
  return <>{generateFooter()}</>;
}
