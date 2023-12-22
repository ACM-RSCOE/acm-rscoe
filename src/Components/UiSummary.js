import React from 'react'
import { Link } from 'react-router-dom'


const Summary = () => {

  return (
      <>
    <div className='big-div'>

        <p className='slider-header'>Glimpses of <span style={{color:"#1993ff"}}>UI PATH </span></p>
       
        <div id='main-carousel' class="main-carousel" data-flickity='{ "cellAlign": "left", "contain": true, "autoPlay":2000,"draggable":true }'>
        <img className="carousel-cell" alt='carousel-img' src='./Images/UiPath/ui5.jpg'></img>
        <img className="carousel-cell" alt='carousel-img' src='./Images/UiPath/ui3.jpg'></img>
        <img className="carousel-cell" alt='carousel-img' src='./Images/UiPath/ui2.jpg'></img>
        <img className="carousel-cell" alt='carousel-img' src='./Images/UiPath/ui1.jpg'></img>
        <img className="carousel-cell" alt='carousel-img' src='./Images/UiPath/ui6.jpg'></img>

        

            
        </div>
           
          
    

        <div className='slider-header'><box-icon name='chevrons-right' type="solid" color='#1993ff'></box-icon>Overall Summary</div>

        <div className='summary-div'>
           
            
           
               
               

            <div className='sum'>
                <p className='sub-head'>Hands on Training Session On UI Path</p>
                
            </div>
        </div>
    </div>

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
            <a target="_blank" rel='noreferrer' href="https://www.instagram.com/acm.rscoe/"><box-icon name='instagram' type='logo' color='#fe0369' ></box-icon></a>
            <a target="_blank" rel='noreferrer' href="https://bit.ly/acmrscoefacebook"> <box-icon name='facebook-circle' type='logo' color='#3e88fe' ></box-icon></a>
            <a target="_blank" rel='noreferrer' href="https://bit.ly/acmrscoetelegram"> <box-icon name='telegram' type='logo' color='#79c6ff' ></box-icon> </a>
            <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/acm-rscoe-student-chapter-386690233/"><box-icon name='linkedin-square' type='logo' color='#5698ff' ></box-icon></a>
            <a target="_blank" rel='noreferrer' href="https://twitter.com/AcmRscoe"><box-icon name='twitter' type='logo' color='#0388fe' ></box-icon></a>
            <a target="_blank" rel='noreferrer' href="https://bit.ly/acmrscoeyoutube"><box-icon name='youtube' type='logo' color='#fe2003' ></box-icon></a>
            
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

export default Summary