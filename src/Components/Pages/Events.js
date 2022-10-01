import React from 'react'
import { useEffect } from 'react'

import Aos from 'aos';
import "aos/dist/aos.css"
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
const Events = () => {
    useEffect(() => {
        Aos.init({duration:2000})
   },[])
   return (
       <>
            <div className='big-upcoming-div' >
           <p className='upcoming' data-aos="flip-up"><ion-icon style={{paddingTop:30}} name="time"></ion-icon>Recent Events</p>

           <div className='upcoming-div' data-aos="flip-up">
               
               
                   <div className='event-info'  data-aos="flip-up">
                       <b>About Event :</b><p style={{paddingBottom:16}}>Participants submitted the photo of their Ganpati Decoration<br /> clicked with "GPS Camera App" available on PLAY STORE.<br /> The submission was open for 3 days.</p>
                       <p>Timeline - 31st August to 2nd September</p>
                       <p>Winner - Pavan Kulkarni</p>
                       <div className='buttons'>
                       
                       <a target="_blank" href="./Images/decoration.jpeg"><button className='btninfo' id='ecofriendlybtn'><ion-icon style={{padding:0,fontSize:24}} name="arrow-forward-circle"></ion-icon>WINNER'S DECORATION</button></a>
                       </div>
                   </div>
                   <div className='event-div'>
                   
                   <div className='event-img-div' id='ecofriendly' data-aos="flip-up"><p>Eco-friendly <br />Ganapati Decoration <br/> Competition</p></div>
                   </div>
               </div>

           <div className='upcoming-div' data-aos="flip-up">
           <div className='event-div'>
                   
                   <div className='event-img-div' id='overseas' data-aos="flip-up"><p>EDUCATION & CAREER<br /> OPPURTUNITIES <br/> ABROAD</p></div>
                   </div>
              
                   <div className='event-info'  data-aos="flip-up">
                       <b>About Event :</b><p style={{paddingBottom:16}}>From enhancing your global network to experiencing<br /> a new culture, the benefits to your<br /> education and career abroad is significant !!</p>
                       <p>Date of Event - 13th August, Saturday</p>
                       <p>Time - 2PM IST</p>
                       <div className='buttons'>
                       {/* <Link to="/summary"><button  onClick="window.scrollTo(0, 0)" className='register'>Event Summary</button></Link> */}
                       <a target="_blank" href="./Images/overseas.jpeg"><button className='btninfo' id='overseasbtn'><ion-icon style={{padding:0,fontSize:24}} name="arrow-forward-circle"></ion-icon>MORE INFO</button></a>
                       </div>
                   </div>

                   
               </div>
               

               <div className='upcoming-div' data-aos="flip-up">
               
              
                   
              
                   
               <div className='event-info'  data-aos="flip-up">

                       <b>About Event :</b><p style={{paddingBottom:5}}>A Webinar on latest technologies <br />like Augmented Reality and Virtual Reality</p>
                        <p>Date - 22nd April</p>
                       <p>Mode - Online</p>
                       
                       <div className='buttons'>
                      <a target="_blank" href="./Images/ar.jpeg"><button className='btninfo' id='arbtn'><ion-icon style={{padding:0,fontSize:24}} name="arrow-forward-circle"></ion-icon>MORE INFO</button></a>
                       </div>
                       </div>
                    
                       <div className='event-div'>
                   <div className='event-img-div'  id='ar-div' data-aos="flip-up"><p style={{fontSize:50}}>AR/VR <br/>Webinar</p></div>
                  
                   </div>

               </div>



           <div className='upcoming-div' data-aos="flip-up">
               
              
                   
               <div className='event-div'>
                   <div className='event-img-div'  id='essay-div' data-aos="flip-up"><p>ESSAY</p></div>
                  
                   </div>
                   
               <div className='event-info'  data-aos="flip-up">

                       <b>About Event :</b><p style={{paddingBottom:5}}>Technical Essay Competition</p>
                       <b>Important Dates :</b><p>Last Date of Registration - 19/05/2022</p>
                       <p>Mode - Online</p>
                       <p>Language - English</p>
                       <div className='buttons'>
                      <a target="_blank" href="./Images/Essay.jpeg"><button className='btninfo' id='essay-btn'><ion-icon style={{padding:0,fontSize:24}} name="arrow-forward-circle"></ion-icon>MORE INFO</button></a>
                       </div>
                       </div>
                    
                  

               </div>




           <div className='upcoming-div' id='poetry-upcoming' data-aos="flip-up">
               
              
                   
               <div className='event-info'  data-aos="flip-up">
                       <b>About Event :</b><p style={{paddingBottom:5}}>Online Poetry Competition</p>
                       <b>Important Dates :</b><p>Last Date of Registration - 22/03/2022</p>
                       <p>Result Declaration - 27/03/2022</p>
                       <div className='buttons'>
                       {/* <a target="_blank" href="https://forms.gle/N8YCTp1SFTdSc6mR8"><button className='register' id='poetry-btn'>REGISTER</button></a> */}
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
                   <Link to="/summary"><button  onClick="window.scrollTo(0, 0)" className='register'>Event Summary</button></Link>
                   {/* <a target="_blank" href="./Images/logica.png"><button className='btninfo'><ion-icon style={{padding:0,fontSize:24}} name="arrow-forward-circle"></ion-icon>MORE INFO</button></a> */}
                   </div>
               </div>
           </div>
           </div>
 <Footer />
 </>
   )
}

export default Events