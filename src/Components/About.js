import React from 'react'
import "../Assets/Css/About.css"
import mainimage from "../Assets/Images/about_logo.png"
import { Link } from 'react-router-dom'

function About() {


  
  return (
    <div>
      <>
      
      <div className='d-flex about'>

      <div className='exp'>
              <h1><b>Experience</b></h1>
              <p>Hi This is Pavan Kumar Frontend Developer With 8 Months of InternShip Experence in<br></br> React.js
              and Redux in Building and Maintaining Software and Software Arhitecture<br></br>Highly 
              Skilled in Communication, Collboration, and Technical Documentation.</p>
                        <div className='about_button'>
                        <button><Link to={"https://drive.google.com/file/d/1DtCBxG1AwTg5Fjzv1GT5zbdqIUkv5ao-/view?usp=sharing"} target='_blank'>Hire Me</Link></button>
                        </div>
              <div className='skils_head'>
                  <h2>Skills</h2>
                  <div className='skils'>
                          <b><i class="fa-brands fa-html5"></i>HMTL5</b>
                          <b><i class="fa-brands fa-css3-alt"></i>CSS3</b>
                          <b><i class="fa-brands fa-bootstrap"></i>Bootstrap</b>
                          <b><i class="fa-brands fa-bootstrap"></i>JavaScript</b>
                          <b><i class="fa-brands fa-react"></i>React.Js</b>
                
                  </div>
              </div>
      </div>
      <div className='image'> 
            <img src={mainimage} alt='image nogt find'/> 
        </div>
      </div>
      
      
      </>
    </div>
  )
}

export default About