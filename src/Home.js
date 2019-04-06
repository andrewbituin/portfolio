import React from "react";
import { Link } from "react-router-dom";

export default function Home(props) {
  function generateNavButtons() {
    return (
      <nav className='home-nav-bar'>
        <button type="click">About</button>
        <button type="click">Résumé</button>
        <button type="click">Projects</button>
        <button type="click">Github</button>
      </nav>
    );
  }
  return (
    <section className='home-header-container'>
      <header className='home-header'>
        <h1>Hello! I'm Andrew, a front end developer.</h1>
        {generateNavButtons()}
      </header>
    </section>
  );
}
