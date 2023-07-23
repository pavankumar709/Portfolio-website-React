import React from 'react'
import "../Assets/Css/Header.css"
import mainimage from "../Assets/Images/logo.png"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <div className='image_div'> 
            
            <Link to={""}><img src={mainimage} alt='image nogt find' className='img'/></Link>
            
            <Link to={"mailto:pasima.pk@gmail.com"}><i class="fa-solid fa-envelope"></i>Pasima.pk@gmail.com</Link>
        
        </div>
        
        <div className='links'>
            <Link to={""}><i class="fa-solid fa-house"></i>Home</Link>
            <Link to={"About"}><i class="fa-solid fa-user"></i>About</Link>
            <Link to={"Projects"}><i class="fa-solid fa-diagram-project"></i>Projects</Link>   
            <Link to={"http://wa.me/+918247075639"} target='_blank'><i class="fa-brands fa-whatsapp"></i>Whatsapp</Link>  
        </div>
    </div>
  )
}

export default Header