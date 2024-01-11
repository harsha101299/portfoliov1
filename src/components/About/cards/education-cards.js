import React, { useEffect } from "react";
import "./education-cards.css";
import AOS from "aos";
import "aos/dist/aos.css";

const EducationCards = () => {

  return (
    <section className="education">
      <div className="educard btech" data-aos="fade-up-right" >
        <h5>2017-2021</h5>
        <h3 className="study">Bachelor of Technology</h3>
        <h3> CMR Engineering College</h3>
        <h4>Mechanical Engineering</h4>
      </div>
      <div className="educard inter"  data-aos="fade-up">
        <h5>2015-2017</h5>
        <h3 className="study">Intermediate</h3>
        <h3>Narayana Juniour College</h3>
        <h4>M.P.C</h4>
      </div>
      <div className="educard tenth" data-aos="fade-up-left">
        <h5>2015</h5>
        <h3 className="study">Secondary School(SSC)</h3>
        <h3> New Ushodaya High School</h3>
      </div>
    </section>
  );
};

export default EducationCards;
