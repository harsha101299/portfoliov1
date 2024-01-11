import React from "react";
import "./skills.css";
import html from "../../images/skills/html.png";
import css from "../../images/skills/css.png";
import javascript from "../../images/skills/javascript.webp";
import ReactJSIM from "../../images/skills/ReactJs.jpg";
import threejs from "../../images/skills/three-js.png";
import redux from "../../images/skills/redux.png";
import nodejs from "../../images/skills/node-js.png";
import express from "../../images/skills/express-js.png";
import mysql from "../../images/skills/sql.png";
import github from "../../images/skills/git-vs-github.png";
import vsCode from "../../images/skills/vsCode.png";

import { FaGears } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="SkillsSection" className="TypeHeading Skills">
      <h2 className="HeadType">Skills</h2>
      <div className="Skillset">
        <div className="wrapHead">
          <h3>
            <FaGears color="white" /> Developement
          </h3>
          <section className="skillBLocks">
            <span className="Html5">
              <img alt="html" src={html}></img>
              {/* <p>HTML</p> */}
            </span>
            <span className="Css3">
              <img alt="css" src={css}></img>
            </span>
            <span className="Javascript">
              <img alt="javascript" src={javascript}></img>
            </span>
            <span className="ReactJS">
              <img alt="ReactJSIM" src={ReactJSIM}></img>
            </span>
            <span className="Redux">
              <img alt="redux" src={redux}></img>
            </span>
            <span className="ThreeJS">
              <img alt="threejs" src={threejs}></img>
            </span>
            <span className="NodeJS">
              <img alt="nodejs" src={nodejs}></img>
            </span>
            <span className="Express">
              <img
                alt="express"
                src={express}
                height="100px"
                width="100px"
              ></img>
            </span>
            <span className="MySql">
              <img alt="mysql" src={mysql} height="100px" width="100px"></img>
            </span>
          </section>
        </div>
        <div className="wrapHead">
          <h3>
            {" "}
            <FaTools color="white" /> Tools
          </h3>

          <section className="skillTools">
            <div className="toolblocks">
              <span className="git">
                <img alt="github" src={github}></img>
              </span>
              <span className="vsCode">
                <img alt="vsCode" src={vsCode}></img>
              </span>
            </div>
          </section>
        </div>
      </div>
      {/* <div className="resume">
        
      <object data='http://website.com/nameoffolder/documentname.pdf#toolbar=1' 
        type='application/pdf' 
        width='100%' 
        height='700px'/>
      </div> */}
    </section>
  );
};

export default Skills;
