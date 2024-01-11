import React from "react";
import "./ProjectCompo.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCompo = ({ src, head, description, url }) => {
  return (
    <a className="mainBox"  target="_blank" href={url} >
      <p className="linkForProj" >
        <img src={src} />
      </p>
      <span className="projDesc">
        <span>
          {head}
          <FaExternalLinkAlt style={{marginLeft:"8px"}} size={"18px"} />
        </span>
        <p className="description">{description}</p>
      </span>
    </a>
  );
};

export default ProjectCompo;
