import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa3,
  faCircleCheck,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
  faNode,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import "./skills-cards.css";


const SkillsCards = () => {

  return (
    <section className="skill">
      <div className="card Technical-skills" data-aos="fade-up-right">
        <h4 className="card-heading">Technical Skills</h4>
        <section className="card-values techincal">
          <span>
            <FontAwesomeIcon
              icon={faHtml5}
              className="icons"
              style={{ color: "#FF694C" }}
            />
            Html
          </span>
          <span>
            <FontAwesomeIcon
              icon={faCss3}
              className="icons"
              style={{ color: "#0096E6" }}
            />
            Css
          </span>{" "}
          <span>
            <FontAwesomeIcon
              icon={faJs}
              className="icons"
              style={{ color: "#F7DF1E" }}
            />
            Javascript
          </span>
          <span>
            <FontAwesomeIcon
              icon={faReact}
              className="icons"
              style={{ color: "#56D3CF" }}
            />
            React
          </span>{" "}
          <span>
            <FontAwesomeIcon
              icon={faReact}
              className="icons"
              style={{ color: "#764ABC" }}
            />
            Redux
          </span>
          <span>
            <FontAwesomeIcon
              icon={fa3}
              className="icons"
              style={{ color: "black" }}
            />
            three js
          </span>
          <span>
            <FontAwesomeIcon
              icon={faNode}
              className="icons"
              style={{ color: "#3A863F" }}
            />
            node js
          </span>
          <span>
            <FontAwesomeIcon
              icon={faNodeJs}
              className="icons"
              style={{ color: "gray" }}
            />
            express js
          </span>{" "}
          <span>
            <FontAwesomeIcon
              icon={faDatabase}
              className="icons"
              style={{ color: "white" }}
            />
            Ms sql
          </span>
          <span>
            <FontAwesomeIcon
              icon={faGitAlt}
              className="icons"
              style={{ color: "#E84E31" }}
            />
            Git/Github
          </span>
        </section>
      </div>
      <div className="card Professional-skills" data-aos="fade-up-left" >
        <h4 className="card-heading">Professional Skills</h4>
        <section className="card-values professional">
          <span>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="icons"
              style={{ color: "#29b124" }}
            />
            Problem solving
          </span>
          <span>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="icons"
              style={{ color: "#29b124" }}
            />
            creativity
          </span>
          <span>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="icons"
              style={{ color: "#29b124" }}
            />
            Logical Thinking
          </span>
          <span>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="icons"
              style={{ color: "#29b124" }}
            />
            Team Work
          </span>
          <span>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="icons"
              style={{ color: "#29b124" }}
            />
            Communication
          </span>
          <span>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="icons"
              style={{ color: "#29b124" }}
            />
            Quick Learner
          </span>
          <span>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="icons"
              style={{ color: "#29b124" }}
            />
            Time management
          </span>
        </section>
      </div>
    </section>
  );
};

export default SkillsCards;
