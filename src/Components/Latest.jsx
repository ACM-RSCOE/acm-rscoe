import React,{useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"
import { Link } from "react-router-dom"

const Latest = () => {
    useEffect(() => {
         Aos.init({duration:2000})
    },[])
    return (
        <div className='big-upcoming-div' >
            <p className='upcoming' data-aos="flip-down"><ion-icon style={{paddingTop:0}} name="time"></ion-icon>Upcoming Events</p>
            <div className='upcoming-div' data-aos="flip-up">
               
               <div className='event-div'>
                   
                   <div className='event-img-div' id='ecofriendly' data-aos="flip-up"><p>Eco-friendly <br />Ganapati Decoration <br/> Competition</p></div>
                   </div>
                   <div className='event-info'  data-aos="flip-up">
                       <b>About Event :</b><p style={{paddingBottom:16}}>Participants will submit the photo of their Ganpati Decoration<br /> clicked with "GPS Camera App" available on PLAY STORE.<br /> The submission will be open for 3 days.</p>
                       <p>Date of Event - 31st August to 2nd September</p>
                       
                       <div className='buttons'>
                       {/* <Link to="/summary"><button  onClick="window.scrollTo(0, 0)" className='register'>Event Summary</button></Link> */}
                       <a target="_blank" href="./Images/ecofriendly.jpeg"><button className='btninfo' id='ecofriendlybtn'><ion-icon style={{padding:0,fontSize:24}} name="arrow-forward-circle"></ion-icon>MORE INFO</button></a>
                       </div>
                   </div>
               </div>
            </div>
            

    )
}

export default Latest