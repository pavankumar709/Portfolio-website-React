import React from "react";
import "../Assets/Css/About.css";
import mainimage from "../Assets/Images/about_logo.png";
import { Link } from "react-router-dom";

function About() {
  const techSkills = [
    { icon: "fa-brands fa-html5", skill: "HTML5" },
    { icon: "fa-brands fa-css3-alt", skill: "CSS3" },
    { icon: "fa-brands fa-js", skill: "JavaScript" },
    { icon: "fa-brands fa-bootstrap", skill: "Bootstrap" },
    { icon: "fa-solid fa-wind", skill: "Tailwind CSS" },
    { icon: "fa-brands fa-react", skill: "React.js" },
    { icon: "fa-solids fa-n", skill: "Next.js" },
    { icon: "fa-solid fa-link", skill: "Svelte.js" },
    { icon: "fa-solid fa-link", skill: "Svelte Kit" },
    { icon: "fa-brands fa-js", skill: "E.js" },
    { icon: "fa-brands fa-figma", skill: "Figma" },
    { icon: "fa-solid fa-wand-magic-sparkles", skill: "WireFrame" },
    { icon: "fa-solid fa-eye", skill: "Prototyping" },
    { icon: "fa-solid fa-pen  ", skill: "Logo Design" },
    { icon: "fa-brands fa-node", skill: "Node.js" },
    { icon: "fa-brands fa-node", skill: "Express.js" },
    { icon: "fa-solid fa-database", skill: "MySQL" },
  ];

  return (
    <>
      <div className="d-flex about col-12 ">
        <div className="exp ">
          <h1 className="text-center ">
            <b>Experience</b>
          </h1>
          <div className="d-flex col-12 justify-content-between flex-wrap">
            <div className="col-md-6 col-12 p-2">
              <div class="card ">
                <div class="card-body">
                  <h3
                    class="card-title "
                    style={{
                      fontWeight: "700",
                    }}
                  >
                    Young Minds Technology Solutions
                  </h3>
                  <span class="card-text">Full Time</span>
                  <p>
                    I developed scalable web applications using React.js and
                    Next.js to improve performance and ensure compatibility
                    across different devices and browsers. I collaborated with
                    designers and product managers to turn wireframes into
                    interactive prototypes using Figma, which led to a 20%
                    increase in user engagement. I also integrated RESTful APIs
                    to display data dynamically and used Redux for efficient
                    state management across the application.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 p-2">
              <div class="card  card-main">
                <div class="card-body">
                  <h3
                    class="card-title "
                    style={{
                      fontWeight: "700",
                    }}
                  >
                    PareTech
                  </h3>
                  <span class="card-text">InternShip </span>
                  <p>
                    <p>
                      Collaborated with cross-functional teams to deliver
                      user-friendly UI/UX designs using Figma.
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-center w-full">Skills</h2>
        <div className="skils flex-wrap" style={{ width: "100%" }}>
          {techSkills.map((item, index) => (
            <b className="mt-2 mx-2 ">
              <i class={item.icon}></i>
              <span className="ms-1">{item.skill}</span>
            </b>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
