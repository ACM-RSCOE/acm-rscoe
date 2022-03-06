import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
    <div className='navbar-div'>
        
        <div className='logo-div'>
   <img className='logo' src='./Images/acmrscoelogo.png' alt="our logo"></img>
   <p className='onlyphone'>ACM RSCOE</p>
        </div>
        <div className='menu-div'>
            
                <Link className="Link" to="/"><li className='item'>HOME</li></Link>
                <li className='item'>DOMAINS</li>
               <Link className='Link' to="/events"> <li className='item'>EVENTS</li></Link>
                <li className='item'>GALLERY</li>
                <li className='item'>OUR TEAM</li>
                <li className='item'>ABOUT US</li>
            
        </div>
        <div className="hamburger">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
        
    </div>
    </header>
  )
}

export default Navbar