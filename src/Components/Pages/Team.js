import React from 'react'
import { useEffect } from 'react'
import Profile from '../Profile'
import Aos from 'aos'
import "aos/dist/aos.css"
import Footer from '../Footer'

const Team = () => {
  useEffect(() => [
    Aos.init({duration:2000})
  ],[])
  return (
      <>
    <div className='teamheader'><p>The Team</p>
    <div className='staff-div'>
      <div>
    <img className="staff" data-aos="fade-up" src='./Images/team/principal.jpeg'></img>
    <p className='name-staff'>Dr.R.K.Jain</p>
    <p className='post-staff'>Director & Principal</p>
    </div>
    <div>
    <img className="staff" data-aos="fade-up" src='./Images/team/hod.jpeg'></img>
    <p className='name-staff'>Dr.S.V.Kedar</p>
    <p className='post-staff'>Professor & HOD Computer Dept.</p>
    </div>
    <div>
    <img className="staff" data-aos="fade-up" src='./Images/team/faculty.jpeg'></img>
    <p className='name-staff'>Prof.S.N.Lohar</p>
    <p className='post-staff'>Faculty Sponsor</p>
    </div>
    </div>
   </div>
    <Profile />
    <Footer />
    </>
  )
}

export default Team