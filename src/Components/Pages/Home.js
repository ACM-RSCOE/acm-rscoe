import React,{useEffect} from 'react'
import Carousel from '../Carousel'
import Events from './Events';
import "../../App.css";
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css"
import Footer from '../Footer';

const Home = () => {
    useEffect(() => {
        Aos.init({duration:1500})
   },[])
  return (
      <>
   
    <Carousel/>
    <div className='big-upcoming-div' >
           <p className='upcoming' data-aos="flip-up"><ion-icon style={{paddingTop:30}} name="time"></ion-icon>Upcoming Events</p>

           <div className='upcoming-div' id='poetry-upcoming' data-aos="flip-up">
               
              
                   
               <div className='event-info'  data-aos="flip-up">
                       <b>About Event :</b><p style={{paddingBottom:5}}>Technical Essay Competition</p>
                       <b>Important Dates :</b><p>Last Date of Registration - 19/05/2022</p>
                       <p>Mode - Online</p>
                       <p>Language - English</p>
                       <div className='buttons'>
                       <a target="_blank" href="https://forms.gle/fxHQVjZKu1sf7R3h9"><button className='register' id='essay-btn'>REGISTER</button></a>
                      <a target="_blank" href="./Images/Essay.jpeg"><button className='btninfo' id='essay-btn'><ion-icon style={{padding:0,fontSize:24}} name="arrow-forward-circle"></ion-icon>MORE INFO</button></a>
                       </div>
                       </div>
                       <div className='event-div'>
                   <div className='event-img-div'  id='essay-div' data-aos="flip-up"><p>ESSAY</p></div>
                  
                   </div>
                  

               </div>


       
   </div> 
  
    <Footer />
    </>
  )
}

export default Home