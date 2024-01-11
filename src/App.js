import { useEffect, useRef, useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Project from "./components/project/Project";
import { SiLinkedin } from "react-icons/si";
import { ImGithub } from "react-icons/im";
import { GrTwitter } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import Header from "./components/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [glow, setGlow] = useState("sha");

  useEffect(() => {
    console.log(glow);
    setTimeout(() => {
      setGlow("");
    }, 100);
  });
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

  const DownloadResume = () => {
    const pdfUrl = "HarshaResume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "HarshaVardhan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const zoominAOS = { "data-aos": "zoom-in", "data-aos-duration": "10000" };
  return (
    <div className="App">
      <Header />
      <div class="Sheader">
        <div class="Sprogress-container">
          <div class="Sprogress-bar" id="myBar"></div>
        </div>
      </div>
      <section className="Info">
        <div className="infomain">
          <div className="details">
            <span className="span hi">Hi, My name is </span>
            <span className={`span har ${glow}`}>Harsha Vardhan Reddy K.</span>
            <span className={`span web ${glow}`}>
              I build things for the web
            </span>
          </div>
          <p>I'm a full stack developer Specialised in MERN Stalk</p>
          <a className={"mailMe"} href="mailto:harsha10reddy@gmail.com">
            Mail me
          </a>
        </div>
      </section>
      <About />
      <Project />
      <footer className="footer">
        <ul className="InfoIcons">
          <li data-aos="fade-up">
            <a
              href="https://www.linkedin.com/in/harsha-vardhan-reddy-aa609920a/"
              target="_blank"
              {...zoominAOS}
            >
              <SiLinkedin />
            </a>
          </li>
          <li data-aos="fade-up">
            <a href="#" {...zoominAOS}>
              <ImGithub />
            </a>
          </li>
          <li data-aos="fade-up">
            <a href="#" {...zoominAOS}>
              <GrTwitter />
            </a>
          </li>
          <li data-aos="fade-up">
            <a
              href="https://www.instagram.com/_harshareddy10?igsh=OGQ5ZDc2ODk2ZA=="
              target="_blank"
              {...zoominAOS}
            >
              <BsInstagram />
            </a>
          </li>
        </ul>
        <button  className="DownloadCv" data-aos="fade-up-left" onClick={DownloadResume}>
          Download Cv
        </button>
      </footer>
      <p className="rights">cretaed by Harsha Reddy | All rights reserved</p>
    </div>
  );
}

export default App;
