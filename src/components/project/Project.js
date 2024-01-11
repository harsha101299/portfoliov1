import React from "react";
import "./Project.css";

import weatherProj from "../../images/weatherProj.jpg";
import calculatorProj from "../../images/NewCalcu.png.jpg";
import todoProj from "../../images/NewTodo.png";
import ProjectCompo from "../ProjectCompo";
import ProjectCard from "../proj-card/ProjectCard";

const Project = () => {
  const Projects = [
    {
      imageSrc: weatherProj,
      heading: "Weather App",
      description:
        "A weather application designed and developed by me which gives the real-time weather data of all the cities across globe.",
      url: "https://get-weather-v1.netlify.app/",
    },
    {
      imageSrc: calculatorProj,
      heading: "Calculator app",
      description:
        "A simple calculator app which helps with mathematical calculations.",
      url: "https://calculator-har.netlify.app/",
    },
    {
      imageSrc: todoProj,
      heading: "To Do app",
      description:
        "A To Do app where you can add your daily tasks and keep track of your works.",
      url: "https://my-apps-todo.netlify.app/",
    },
  ];
  return (
    <div id="ProjectsSection" className=" AllProjects">
      <div className="HeadType">Projects</div>
      <div className="projects">
        {Projects.map((pro, ind) => {
          return (
            <ProjectCard
              src={pro.imageSrc}
              head={pro.heading}
              description={pro.description}
              url={pro.url}
              dataAos={ind % 2 ? "fade-up" : "fade-down"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
