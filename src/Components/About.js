import React from "react";
import "../Assets/Css/About.css";
import mainimage from "../Assets/Images/about_logo.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="d-flex about col-12 ">
        <div className="exp ">
          <h1>
            <b>Experience</b>
          </h1>
          <div className="d-flex col-12 ">
            <div class="card col-5">
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
                  Next.js to improve performance and ensure compatibility across
                  different devices and browsers. I collaborated with designers
                  and product managers to turn wireframes into interactive
                  prototypes using Figma, which led to a 20% increase in user
                  engagement. I also integrated RESTful APIs to display data
                  dynamically and used Redux for efficient state management
                  across the application.
                </p>
              </div>
            </div>
            <div class="card col-5 ms-3">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="mt-5">
        <h2>Skills</h2>
        <div className="skils " style={{ width: "100%" }}>
          <b>
            <i class="fa-brands fa-html5"></i>HMTL5
          </b>
          <b>
            <i class="fa-brands fa-css3-alt"></i>CSS3
          </b>
          <b>
            <i class="fa-brands fa-bootstrap"></i>Bootstrap
          </b>
          <b>
            <i class="fa-brands fa-bootstrap"></i>JavaScript
          </b>
          <b>
            <i class="fa-brands fa-react"></i>React.Js
          </b>
          <b>
            <i class="fa-brands fa-html5"></i>HMTL5
          </b>
          <b>
            <i class="fa-brands fa-css3-alt"></i>CSS3
          </b>
          <b>
            <i class="fa-brands fa-bootstrap"></i>Bootstrap
          </b>
          <b>
            <i class="fa-brands fa-bootstrap"></i>JavaScript
          </b>
          <b>
            <i class="fa-brands fa-react"></i>React.Js
          </b>
        </div>
      </div>
    </>
  );
}

export default About;
