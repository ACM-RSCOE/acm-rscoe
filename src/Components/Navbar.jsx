import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
    <div className='navbar-div'>
        
        <div className='logo-div'>
  <Link to="/"> <img className='logo' src='./Images/acmrscoelogo.png' alt="our logo"></img></Link>
  <Link to="/"> <p className='onlyphone'>ACM RSCOE</p></Link>
        </div>
        <div className='menu-div'>
            
                <Link className="Link" to="/"><li className='item'>HOME</li></Link>
                
               <Link className='Link' to="/events"> <li className='item'>EVENTS</li></Link>
                
                <Link className='Link' to="/team"><li className='item'>OUR TEAM</li></Link>
               <Link className='Link' to="/about"> <li className='item'>ABOUT US</li></Link>
            
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