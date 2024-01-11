import React from "react";
import "./Header.css";
const Header = () => {
  function GotoAbout() {
    let element = document.getElementById("AboutMeSection");
    let rect = element.getBoundingClientRect();
    window.scrollTo({
      top: rect.y,
      left: rect.x,
      behavior: "smooth",
    });
  }

  function GotoProjects() {
    let element = document.getElementById("ProjectsSection");
    let rect = element.getBoundingClientRect();
    window.scrollTo({
      top: rect.y,
      left: rect.x,
      behavior: "smooth",
    });
  }

  return (
    <header>
      <a href="https://harshareddyv1.netlify.app/"  className="name"> 
      <span style={{color:"rgb(49, 245, 245)"}} >{"<H"}</span>
      <span style={{color:"white"}} >{"R/>"}</span>
      </a>
      <ul className="menu-list">
        <li onClick={GotoAbout}>About</li>
        <li onClick={GotoProjects}>Projects</li>
      </ul>
    </header>
  );
};

export default Header;
