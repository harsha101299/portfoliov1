import React from "react";
import classes from "./projectCard.module.css";

const ProjectCard = ({ src, head, description, url,dataAos }) => {
  return (
    <a href={url} target="_blank" className={classes.projMain} data-aos= {dataAos}>
      <div className={classes.Image}>
        <img src={src} className={classes.proimg} />
      </div>
      <h2 className={classes.heading} >{head}</h2>
      <span className={classes.description} >{description}
      </span>
    </a>
  );
};

export default ProjectCard;
