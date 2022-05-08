import React from 'react'
import { Link } from 'react-router-dom'


const Summary = () => {

  return (
      <>
    <div className='big-div'>

        <p className='slider-header'>Glimpses of <span style={{color:"#1993ff"}}>Logica 2022</span></p>
       
        <div id='main-carousel' class="main-carousel" data-flickity='{ "cellAlign": "left", "contain": true, "autoPlay":2000,"draggable":true }'>
        <img className="carousel-cell" alt='carousel-img' src='./Images/logica/sd1.png'></img>
            <img className="carousel-cell" alt='carousel-img' src='./Images/logica/sd2.png'></img>
            <img className="carousel-cell" alt='carousel-img' src='./Images/logica/sd3.png'></img>
            <img className="carousel-cell" alt='carousel-img' src='./Images/logica/sd4.png'></img>
            <img className="carousel-cell" alt='carousel-img' src='./Images/logica/sd4.png'></img>
            <img className="carousel-cell" alt='carousel-img' src='./Images/logica/final1.png'></img>
            <img className="carousel-cell" alt='carousel-img' src='./Images/logica/final2.png'></img>
            <img className="carousel-cell" alt='carousel-img' src='./Images/logica/final3.png'></img>
            <img className="carousel-cell" alt='carousel-img' src='./Images/logica/final4.png'></img>
            <img className="carousel-cell" alt='carousel-img' src='./Images/logica/final5.png'></img>
            <img className="carousel-cell" alt='carousel-img' src='./Images/logica/final6.png'></img>
            <img className="carousel-cell" alt='carousel-img' src='./Images/logica/sm1.png'></img>
            <img className="carousel-cell" alt='carousel-img' src='./Images/logica/sm2.png'></img>
            <img className="carousel-cell" alt='carousel-img' src='./Images/logica/sum.png'></img>
            <img className="carousel-cell" alt='carousel-img' src='./Images/logica/in1.png'></img>
            <img className="carousel-cell" alt='carousel-img' src='./Images/logica/in2.png'></img>
            <img className="carousel-cell" alt='carousel-img' src='./Images/logica/in3.png'></img>
            <img className="carousel-cell" alt='carousel-img' src='./Images/logica/in4.png'></img>
            <img className="carousel-cell" alt='carousel-img' src='./Images/logica/in5.png'></img>
            <img className="carousel-cell" alt='carousel-img' src='./Images/logica/in6.png'></img>
            <img className="carousel-cell" alt='carousel-img' src='./Images/logica/sd1.png'></img>
            <img className="carousel-cell" alt='carousel-img' src='./Images/logica/sd5.png'></img>
            <img className="carousel-cell" alt='carousel-img' src='./Images/logica/sd6.png'></img>
            <img className="carousel-cell" alt='carousel-img' src='./Images/logica/sd7.png'></img>
            <img className="carousel-cell" alt='carousel-img' src='./Images/logica/sd8.png'></img>
            <img className="carousel-cell" alt='carousel-img' src='./Images/logica/sd1.png'></img>
        </div>
           
          
    

        <div className='slider-header'><box-icon name='chevrons-right' type="solid" color='#1993ff'></box-icon>Overall Summary</div>

        <div className='summary-div'>
           
            <div className='sum'>
                <p className='sub-head'><box-icon name='right-arrow' type='solid' color='#1993ff' ></box-icon>States Participated</p>
                <p className='pt'><box-icon name='right-arrow-alt' type='solid' color='#1993ff' ></box-icon>Maharashtra</p>
                <p className='pt'><box-icon name='right-arrow-alt' type='solid' color='#1993ff' ></box-icon>Tamil Nadu</p>
                <p className='pt'><box-icon name='right-arrow-alt' type='solid' color='#1993ff' ></box-icon>Karnataka</p>

                <p className='sub-head'><box-icon name='right-arrow' type='solid' color='#1993ff' ></box-icon>Departments Participated</p>
                <p className='pt'><box-icon name='right-arrow-alt' type='solid' color='#1993ff' ></box-icon>CSE</p>
                <p className='pt'><box-icon name='right-arrow-alt' type='solid' color='#1993ff' ></box-icon>IT</p>
                <p className='pt'><box-icon name='right-arrow-alt' type='solid' color='#1993ff' ></box-icon>Mech</p>
                <p className='pt'><box-icon name='right-arrow-alt' type='solid' color='#1993ff' ></box-icon>EnTC</p>
            </div>
           
           
               
               

            <div className='sum'>
                <p className='sub-head'><box-icon name='right-arrow' type='solid' color='#1993ff' ></box-icon>Domains Involved</p>
                <p className='pt'><box-icon name='right-arrow-alt' type='solid' color='#1993ff' ></box-icon>Artificial Intelligence</p>
                <p className='pt'><box-icon name='right-arrow-alt' type='solid' color='#1993ff' ></box-icon>Blockchain</p>
                <p className='pt'><box-icon name='right-arrow-alt' type='solid' color='#1993ff' ></box-icon>Cybersecurity</p>
                <p className='pt'><box-icon name='right-arrow-alt' type='solid' color='#1993ff' ></box-icon>Embedded Systems</p>
                <p className='pt'><box-icon name='right-arrow-alt' type='solid' color='#1993ff' ></box-icon>Data Science</p>
                <p className='pt'><box-icon name='right-arrow-alt' type='solid' color='#1993ff' ></box-icon>Deep Learning</p>
                <p className='pt'><box-icon name='right-arrow-alt' type='solid' color='#1993ff' ></box-icon>Machine Learning</p>
                <p className='pt'><box-icon name='right-arrow-alt' type='solid' color='#1993ff' ></box-icon>Internet of Things</p>
                <p className='pt'><box-icon name='right-arrow-alt' type='solid' color='#1993ff' ></box-icon>Web Development</p>
                <p className='pt'><box-icon name='right-arrow-alt' type='solid' color='#1993ff' ></box-icon>Android Development</p>
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

export default Summary