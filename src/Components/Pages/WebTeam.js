import React from 'react'
import { useEffect } from 'react'
//import "../App.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
const WebTeam = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div>
      <div className="teamheader-web">
        <p>Web Team</p>
        <h6 className="p">
          Technology passionates, who grind to keep the ACM website updated and
          running smoothly equipped with Modern Technologies and talent like
          great working standards and team work.
        </h6>
      </div>
      <div className="profile-card-div">
        <div className="profile-card-web" data-aos="zoom-out">
          <div className="photo-div">
            <img
              className="profile-photo"
              src="./Images/team/vasudevsurwase.jpeg"
            ></img>
          </div>
          <div className="total-info">
            <div className="photo-info-div">
              <a href="https://www.linkedin.com/in/vasudev-surwase-645a2b213">
                <ion-icon
                  name="logo-linkedin"
                  style={{ padding: 0, fontSize: 30, color: 'cornflowerblue' }}
                ></ion-icon>
              </a>
              <p className="name">Vasudev Surwase</p>
            </div>
          </div>
        </div>

        <div className="profile-card-web" data-aos="zoom-out">
          <div className="photo-div">
            <img
              className="profile-photo"
              src="./Images/team/abhishekdhanke.png"
            ></img>
          </div>
          <div className="total-info">
            <div className="photo-info-div">
              <a href="https://www.linkedin.com/in/abhishek-dhanke-226354216/">
                <ion-icon
                  name="logo-linkedin"
                  style={{ padding: 0, fontSize: 30, color: 'cornflowerblue' }}
                ></ion-icon>
              </a>
              <p className="name">Abhishek Dhanke</p>
            </div>
          </div>
        </div>

        <div className="profile-card-web" data-aos="zoom-out">
          <div className="photo-div">
            <img
              className="profile-photo"
              src="./Images/team/jayshinde.jpg"
            ></img>
          </div>
          <div className="total-info">
            <div className="photo-info-div">
              <a href="https://www.linkedin.com/in/jay-shinde-5a827317b">
                <ion-icon
                  name="logo-linkedin"
                  style={{ padding: 0, fontSize: 30, color: 'cornflowerblue' }}
                ></ion-icon>
              </a>
              <p className="name">Jay Shinde</p>
            </div>
          </div>
        </div>

        <div className="profile-card-web" data-aos="zoom-out">
          <div className="photo-div">
            <img
              className="profile-photo"
              src="./Images/team/rushikeshsarode.jpg"
            ></img>
          </div>
          <div className="total-info">
            <div className="photo-info-div">
              <a href="https://www.linkedin.com/in/rushikesh-sarode-57b514226/">
                <ion-icon
                  name="logo-linkedin"
                  style={{ padding: 0, fontSize: 30, color: 'cornflowerblue' }}
                ></ion-icon>
              </a>
              <p className="name">Rushikesh Sarode</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebTeam
