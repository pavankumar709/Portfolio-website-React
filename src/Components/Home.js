import React, { useEffect } from "react";
import mainimage from "../Assets/Images/logo.png";
import "../Assets/Css/Home.css";
import { Link } from "react-router-dom";
import AOS from "aos";

function Home() {
  return (
    <div className="d-flex home_main" data-aos="fade-down">
      {/* this is main div we can convert this div into display fles */}

      <div className="Links_social">
        <div>
          <Link to={"https://github.com/pavankumar709"} target="_blank">
            <i class="fa-brands fa-github"></i>
          </Link>
        </div>
        <div>
          <Link
            to={"https://www.linkedin.com/in/pasima-pavan-kumar-a2b273260/  "}
            target="_black"
          >
            <i class="fa-brands fa-linkedin"></i>
          </Link>
        </div>
        <div>
          <Link to={"https://dribbble.com/pavanweb"} target="_blank">
            <i class="fa-brands fa-dribbble"></i>
          </Link>
        </div>
        <div>
          <Link to={"https://www.behance.net/pavankumar830"} target="_blank">
            <i class="fa-brands fa-behance"></i>
          </Link>
        </div>
        {/* here completed the lniks setion continue*/}
      </div>
      {/* on this line made two extra div and it come side by side*/}
      <div className="home_matter col-md-5 col-12">
        <h1>
          <b>Hey, I'M Pavan Kumar</b>
        </h1>
        <br></br>
        <p>
          I specialize in creating user-friendly and visually appealing
          interfaces that contribute to the success of digital products. With a
          strong focus on frontend development, I bring 2 years of expertise in
          delivering responsive designs and seamless user experiences.
        </p>

        <div className="d-flex button">
          {/* this is used for the buttons */}

          <button className="hire-me-button">
            <Link
              to={
                "https://drive.google.com/file/d/1DtCBxG1AwTg5Fjzv1GT5zbdqIUkv5ao-/view?usp=sharing"
              }
              target="_blank"
            >
              Hire Me
            </Link>
          </button>
        </div>
      </div>
      <div className="image">
        <img src={mainimage} alt="image nogt find" loading="lazy" />
      </div>
    </div>
  );
}

export default Home;
