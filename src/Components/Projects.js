import React from "react";
import { Link } from "react-router-dom";
import food from "../Assets/Images/Food_app.png";
import wea from "../Assets/Images/Weather.png";
import "../Assets/Css/Project.css";
import pro_img from "../Assets/Images/projects.png";

function Projects() {
  return (
    <div>
      <>
        <div className="d-flex bg-light project">
          <div className="d-flex food">
            <div className="projects_links">
              <Link to={"https://food-app709.netlify.app/"} target="_blank">
                <img src={food} alt="image is not found" />
              </Link>
              <p>
                <b>Food App</b>
              </p>
              <Link to={"https://weatherapp709.netlify.app/"} target="_blank">
                <img src={wea} alt="image is not found" />
              </Link>
              <p>
                <b>Weather APP</b>
              </p>
            </div>
          </div>

          <div className="logo_image">
            <img src={pro_img} alt="" loading="lazy" />
          </div>
        </div>
      </>
    </div>
  );
}

export default Projects;
