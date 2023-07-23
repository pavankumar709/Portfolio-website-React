import React from 'react'
import mainimage from "../Assets/Images/logo.png"
import "../Assets/Css/Home.css"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='d-flex home_main'>
      {/* this is main div we can convert this div into display fles */}
       
        <div className='Links_social'>
          
        <div>
        <Link to={"https://github.com/pavankumar709"} target='_blank'><i class="fa-brands fa-github"></i></Link>
        </div>
        <div>
          <Link to={"https://www.linkedin.com/in/pavan-kumar-a2b273260"} target='_black'><i class="fa-brands fa-linkedin"></i></Link>
        </div>
        <div>
        <Link to={"https://www.instagram.com/pavankumar709790/?hl=en"} target='_blank'><i class="fa-brands fa-instagram"></i></Link>
        </div>
        {/* here completed the lniks setion continue*/}
        </div>
        {/* on this line made two extra div and it come side by side*/}
        <div className='home_matter'>
          <h1><b>Hey, I'M Pavan Kumar</b></h1><br></br>
          <p>A Frontend Focused Web Developer Building The Frontend of Websits and Wed <br></br>Application That Leads to the Success of the Overall Product</p>
          
          <div className='d-flex button'>
            {/* this is used for the buttons */}

          <button><Link to={"https://drive.google.com/drive/u/0/folders/1WJnooUFfM7rOUiZeortqWkr20Rk7rRRt"} target='_blank'>Hire Me</Link></button>
          </div>
        </div>
        <div className='image'> 
            <img src={mainimage} alt='image nogt find'/> 
        </div>
    </div>
  )
}

export default Home