import React,{useEffect} from 'react'
import Carousel from '../Carousel'
import Events from './Events';
import "../../App.css"
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
                       <b>About Event :</b><p style={{paddingBottom:5}}>Online Poetry Competition</p>
                       <b>Important Dates :</b><p>Last Date of Registration - 22/03/2022</p>
                       <p>Result Declaration - 27/03/2022</p>
                       <div className='buttons'>
                       <a target="_blank" href="https://forms.gle/N8YCTp1SFTdSc6mR8"><button className='register' id='poetry-btn'>REGISTER</button></a>
                       <a target="_blank" href="./Images/poetry.png"><button className='btninfo' id='poetry-btn'><ion-icon style={{padding:0,fontSize:24}} name="arrow-forward-circle"></ion-icon>MORE INFO</button></a>
                       </div>
                       </div>
                       <div className='event-div'>
                   <div className='event-img-div'  id='poetry-div' data-aos="flip-up"><p>POETRY</p></div>
                   </div>
                  

               </div>


       <div className='upcoming-div' data-aos="flip-up">
               
           <div className='event-div'>
               
               <div className='event-img-div' data-aos="flip-up"><p>LOGICA</p></div>
               </div>
               <div className='event-info'  data-aos="flip-up">
                   <b>About Event :</b><p style={{paddingBottom:16}}>Online National Level Project Competition</p>
                   <b>Important Dates :</b><p>Last Date of Registration - 22/03/2022</p>
                   <p>Date of Competition - 26/03/2022</p>
                   <div className='buttons'>
                   <a target="_blank" href="https://forms.gle/u2E6AruXbVU86h6CA"><button className='register'>REGISTER</button></a>
                   <a target="_blank" href="./Images/logica.png"><button className='btninfo'><ion-icon style={{padding:0,fontSize:24}} name="arrow-forward-circle"></ion-icon>MORE INFO</button></a>
                   </div>
               </div>
           </div>
           </div>
    <Footer />
    </>
  )
}

export default Home