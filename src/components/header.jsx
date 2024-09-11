import React from "react";
import "../Styles/header.css";

const Header = () => {
  return (
    <header className="header">
    <h1 className="logo">Movie Mania</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#movies">Movies</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
    <button className="cta-button">Get Started</button>
  </header>
  
  );
};

export default Header;
