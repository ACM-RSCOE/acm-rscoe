import React from 'react'
import WebTeam from './Pages/WebTeam'
import { Link } from 'react-router-dom'
import "../App.css"

const Footer = () => {
  return (
      <>
    <div className='footer-div'>
        <div className='address-div'>
            <p className='contact'><ion-icon name="location"></ion-icon>Contact Us</p>
            <p className='address'>JSPM's Rajarshi Shahu College of Engineering, Ashok Nagar, Tathawade, Pimpri-Chinchwad, Maharashtra 411033</p>
            <div style={{fontFamily:"Inter",fontSize:22,padding:10,textAlign:"center"}}><ion-icon name="mail"></ion-icon>Email:</div> <p className='mailcontact'>   rscoeacmchapter@gmail.com</p>

        </div>
        <div className='footer-logo-div'>
            <img className='footer-logo' src='./Images/acmrscoelogo.png'></img>
        </div>
        <div className='follow-div'>
            <p>Follow Us on:</p>
            <a target="_blank" href="https://www.instagram.com/acm.rscoe/"><box-icon name='instagram' type='logo' color='#fe0369' ></box-icon></a>
            <a target="_blank" href="https://bit.ly/acmrscoefacebook"> <box-icon name='facebook-circle' type='logo' color='#3e88fe' ></box-icon></a>
            <a target="_blank" href="https://bit.ly/acmrscoetelegram"> <box-icon name='telegram' type='logo' color='#79c6ff' ></box-icon> </a>
            <a target="_blank" href="https://www.linkedin.com/in/acm-rscoe-student-chapter-386690233/"><box-icon name='linkedin-square' type='logo' color='#5698ff' ></box-icon></a>
            <a target="_blank" href="https://twitter.com/AcmRscoe"><box-icon name='twitter' type='logo' color='#0388fe' ></box-icon></a>
            <a target="_blank" href="https://bit.ly/acmrscoeyoutube"><box-icon name='youtube' type='logo' color='#fe2003' ></box-icon></a>
            
        </div>
    </div>
    <div className='credit'>
    <Link to="/webteam" >
        <p onClick="window.scrollTo(0, 0)" style={{fontFamily:"Be Vietnam pro",fontSize:15,color:'white',textAlign:"center"}}>Developed with ❤️ by ACM RSCOE<span style={{color:"skyblue",fontWeight:"bold"}}>Web Team</span></p>
        </Link>
    </div>
    </>
  )
}

export default Footer