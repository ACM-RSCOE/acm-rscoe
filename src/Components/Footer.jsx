import React from 'react'

const Footer = () => {
  return (
      <>
    <div className='footer-div'>
        <div className='address-div'>
            <p className='contact'><ion-icon name="location"></ion-icon>Contact Us</p>
            <p className='address'>JSPM's Rajarshi Shahu College of Engineering, Ashok Nagar, Tathawade, Pimpri-Chinchwad, Maharashtra 411033</p>
            <div style={{fontFamily:"Be Vietnam pro",fontSize:22,padding:10,textAlign:"center"}}><ion-icon name="mail"></ion-icon>Email:</div> <p className='mailcontact'>   rscoeacmchapter@gmail.com</p>

        </div>
        <div className='footer-logo-div'>
            <img className='footer-logo' src='./Images/acmrscoelogo.png'></img>
        </div>
        <div className='follow-div'>
            <p>Follow Us on:</p>
            <a target="_blank" href="https://www.instagram.com/acm.rscoe/"> <img classname="socialmedia" src='./Images/instagram-alt-logo-36.png'></img></a>
            <a target="_blank" href="https://bit.ly/acmrscoefacebook"> <img classname="socialmedia" src='./Images/facebook-circle-logo-36.png'></img></a>
            <a target="_blank" href="https://bit.ly/acmrscoetelegram">  <img classname="socialmedia" src='./Images/telegram-logo-36.png'></img></a>
            <a target="_blank" href="https://www.linkedin.com/in/acm-rscoe-student-chapter-386690233/"> <img classname="socialmedia" src='./Images/linkedin-square-logo-36.png'></img></a>
            <a target="_blank" href="https://twitter.com/AcmRscoe"><img classname="socialmedia" src='./Images/twitter-logo-36.png'></img></a>
            <a target="_blank" href="https://bit.ly/acmrscoeyoutube"><img classname="socialmedia" src='./Images/youtube-logo-36.png'></img></a>
            
        </div>
    </div>
    <div className='credit'>
        <p style={{fontFamily:"Be Vietnam pro",fontSize:15,color:'white',textAlign:"center"}}>Developed with ❤️ by ACM RSCOE <span style={{color:"skyblue"}}>Web Team</span></p>
    </div>
    </>
  )
}

export default Footer