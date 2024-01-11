import React, { useState } from "react";
import "./About.css";
import Harsha from "../../images/harshaReddy.jpg";
import SkillsCards from "./cards/skills-cards";
import ExperienceCards from "./cards/experience-cards";
import EducationCards from "./cards/education-cards";


const About = () => {
  const [currenttab, setCurrentTab] = useState("skills-cards");

  const OnClickTab = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <section id="AboutMeSection" className="TypeHeading AboutMe">
      <h2 className="HeadType">About me</h2>
      <div className="detailsSection"  >
        <div className="Mydescription" data-aos= "fade-right">
          <span className="nameInDesc">Hey, I'm Harsha,</span>
          <span className="tagInDesc">
            I'm a design-minded, detail oriented software engineer passionate
            about combining beautiful code with beautiful design.{" "}
          </span>
          <span className="divider"></span>
          &emsp; &emsp;I’m a Frontend Developer with good enough skills in
          backend as well. I'm passionate about music, badminton, technology and
          basically everything that makes the internet tick. <br /> <br />I am
          based out Hyderabad and completed all of my education in the same
          place. I have a work an experience 2years from Tata Consultancy
          Services. I have developed many user-friendly websites using React &
          Redux in web applications and created Restful Api’s with node.js and
          express.js.
        </div>
        <figure data-aos="zoom-out"  >
          <img className="profilePic" alt="Harsha Reddy" src={Harsha}></img>
        </figure>
      </div>
      <div className="tabLinks-container">
        <div className="tabLinks">
          <p
            id="skills-cards"
            className={`link ${currenttab === "skills-cards" && "active"}`}
            onClick={OnClickTab}
          >
            Skills
          </p>
          <p
            id="experience-cards"
            onClick={OnClickTab}
            className={`link ${currenttab === "experience-cards" && "active"}`}
          >
            Work experience
          </p>
          <p
            id="education-cards"
            onClick={OnClickTab}
            className={`link ${currenttab === "education-cards" && "active"}`}
          >
            Education
          </p>
        </div>
        <div className="display-card">
          {currenttab === "skills-cards" && <SkillsCards />}
          {currenttab === "experience-cards" && <ExperienceCards />}
          {currenttab === "education-cards" && <EducationCards />}
        </div>
      </div>
    </section>
  );
};

export default About;
