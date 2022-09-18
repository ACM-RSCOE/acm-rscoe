import React,{useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"

const Carousel = () => {
  useEffect(() => {
    Aos.init({duration:2000})
},[])
  return (
    <div className='carousel-div'>
       <img className="carousel-logo" src='./Images/acmrscoelogo.png' alt='Logo'></img>
        <p className='welcome-note' data-aos="zoom-in" ><span style={{color:"rgb(61, 142, 255)"}}>JSPM RSCOE ACM</span> Student Chapter</p>
       <a href='https://forms.gle/ph7jcpv5xXGDZbF47' data-aos="zoom-in"> <button className='btninfo' id='join-btn'><ion-icon style={{padding:0,fontSize:24}} name="arrow-forward-circle"></ion-icon>Join ACM</button></a>
    </div>
  )
}

export default Carousel