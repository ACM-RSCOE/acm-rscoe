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
    <br/>
    <div className="photo">
            <img className="group-photo" src="./Images/team/20220915_163529.jpg" alt=""/>
        </div>
        </div>
   
    <Profile />
    <Footer />
    </>
  )
}

export default Team