import React from 'react'
import { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
const Events = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <>
      <div className="big-upcoming-div">
        <p className="upcoming" data-aos="zoom-out">
          <ion-icon style={{ paddingTop: 30 }} name="time"></ion-icon>Recent
          Events
        </p>

        <div className="upcoming-div" data-aos="zoom-out">
          <div className="event-div">
            <div id="willpower" data-aos="zoom-out">
              <img
                className="will"
                id="trinity"
                src="./Images/pink-trinity-logo.png"
                alt="hackathon"
              ></img>
            </div>
          </div>

          <div className="event-info" data-aos="zoom-out">
            <b>About Event :</b>
            <p style={{ paddingBottom: 16 }}>
              TRINITY
              <br />
              <b></b> Learn to Design, Develop and Deploy!
            </p>
            <p>
              <b>Date of Event</b> - 25th February 2023
            </p>

            <p>
              <b>Venue</b> - Computer Dept. RSCOE
            </p>
            <div className="buttons">
              {/* <Link to="/summary"><button  onClick="window.scrollTo(0, 0)" className='register'>Event Summary</button></Link> */}
              <a target="_blank" rel='noreferrer' href="https://trinity-2023.vercel.app/">
                <button className="btninfo" id="overseasbtn">
                  <ion-icon
                    style={{ padding: 0, fontSize: 24 }}
                    name="arrow-forward-circle"
                  ></ion-icon>
                  MORE INFO
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="upcoming-div" data-aos="zoom-out">
          <div className="event-info" data-aos="zoom-out">
            <b>About Event :</b>
            <p style={{ paddingBottom: 16 }}>
              On the occasion of Children's <br />
              Day, we went to orphanage <br />
              under ACM Chapter.
              <br />
            </p>
            <p>
              <b>Date of Event</b> - 14th November, Monday
            </p>
            <p>
              <b>Time</b> - 11:00 am to 05:30 pm IST
            </p>
            <p>
              <b>Venue</b> - Shardashram Prathmik <br />
              Aashram Shala, Shirgaon
            </p>
            <div className="buttons">
              {/* <Link to="/summary"><button  onClick="window.scrollTo(0, 0)" className='register'>Event Summary</button></Link> */}
              <Link to="/childrensday">
                <button className="btninfo" id="overseasbtn">
                  <ion-icon
                    style={{ padding: 0, fontSize: 24 }}
                    name="arrow-forward-circle"
                  ></ion-icon>
                  MORE INFO
                </button>
              </Link>
            </div>
          </div>

          <div className="event-div">
            <div id="willpower" data-aos="zoom-out">
              <img
                src="./Images/CD/Childrensday.jpg"
                className="will"
                alt="will harris"
              />
            </div>
          </div>
        </div>

        <div className="upcoming-div" data-aos="zoom-out">
          <div className="event-div">
            <div id="willpower" data-aos="zoom-out">
              <img
                src="./Images/willpower.jpg"
                className="will"
                alt="will harris"
              />
            </div>
          </div>

          <div className="event-info" data-aos="zoom-out">
            <b>About Event :</b>
            <p style={{ paddingBottom: 16 }}>
              Willpower ABCs of Success
              <br />
              <b>Speaker</b> : Mr. Will Harris(USA)
            </p>
            <p>
              <b>Date of Event</b> - 3rd October, Monday
            </p>
            <p>
              <b>Time</b> - 10:30AM to 12:30PM IST
            </p>
            <p>
              <b>Venue</b> - MBA Seminar Hall
            </p>
            <div className="buttons">
              {/* <Link to="/summary"><button  onClick="window.scrollTo(0, 0)" className='register'>Event Summary</button></Link> */}
              <a target="_blank" href="./Images/willflyer.jpeg">
                <button className="btninfo" id="overseasbtn">
                  <ion-icon
                    style={{ padding: 0, fontSize: 24 }}
                    name="arrow-forward-circle"
                  ></ion-icon>
                  MORE INFO
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="upcoming-div" id="reverse" data-aos="zoom-out">
          <div className="event-info" data-aos="zoom-out">
            <b>About Event :</b>
            <p style={{ paddingBottom: 16 }}>
              Session on Blockchain Technology
              <br />
              <b>Speakers</b> : <br />
              Shrushti Patil<br></br>
              Prakash Koli
            </p>
            <p>
              <b>Date of Event</b> - 3rd October, Monday
            </p>
            <p>
              <b>Time</b> - 12:30PM IST
            </p>
            <p>
              <b>Venue</b> - MBA Seminar Hall
            </p>
            <div className="buttons">
              {/* <Link to="/summary"><button  onClick="window.scrollTo(0, 0)" className='register'>Event Summary</button></Link> */}
              <a target="_blank" href="./Images/block.jpeg">
                <button className="btninfo" id="overseasbtn">
                  <ion-icon
                    style={{ padding: 0, fontSize: 24 }}
                    name="arrow-forward-circle"
                  ></ion-icon>
                  MORE INFO
                </button>
              </a>
            </div>
          </div>
          <div className="event-div">
            <div className="event-img-div" id="overseas" data-aos="zoom-out">
              <p>
                SESSION ON <br />
                BLOCKCHAIN <br />
                TECHNOLOGY
              </p>
            </div>
          </div>
        </div>

        <div className="upcoming-div" data-aos="zoom-out">
          <div className="event-div">
            <div id="willpower" data-aos="zoom-out">
              <img
                src="./Images/vishwas.jpg"
                className="will"
                alt="Vishwas Badhe"
              />
            </div>
          </div>

          <div className="event-info" data-aos="zoom-out">
            <b>About Event :</b>
            <p style={{ paddingBottom: 16 }}>
              Opportunities for the Students
              <br /> in the industry on the <br />
              basis of AI and ML
              <br />
              <b>Speaker</b> : Prof.Vishwas Badhe(IIT Bombay)
            </p>
            <p>
              <b>Date of Event</b> - 4th October, Tuesday
            </p>
            <p>
              <b>Time</b> - 11:45AM IST
            </p>
            <p>
              <b>Venue</b> - MBA Seminar Hall
            </p>
            <div className="buttons">
              {/* <Link to="/summary"><button  onClick="window.scrollTo(0, 0)" className='register'>Event Summary</button></Link> */}
              <a target="_blank" href="./Images/iit.jpeg">
                <button className="btninfo" id="overseasbtn">
                  <ion-icon
                    style={{ padding: 0, fontSize: 24 }}
                    name="arrow-forward-circle"
                  ></ion-icon>
                  MORE INFO
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="upcoming-div" id="reverse" data-aos="zoom-out">
          <div className="event-info" data-aos="zoom-out">
            <b>About Event :</b>
            <p style={{ paddingBottom: 16 }}>
              Participants submitted the photo of their Ganpati Decoration
              <br /> clicked with "GPS Camera App" available on PLAY STORE.
              <br /> The submission was open for 3 days.
            </p>
            <p>Timeline - 31st August to 2nd September</p>
            <br />
            <p>Winner - Pavan Kulkarni</p>
            <div className="buttons">
              <a target="_blank" href="./Images/decoration.jpeg">
                <button className="btninfo" id="ecofriendlybtn">
                  <ion-icon
                    style={{ padding: 0, fontSize: 24 }}
                    name="arrow-forward-circle"
                  ></ion-icon>
                  WINNER'S DECORATION
                </button>
              </a>
            </div>
          </div>
          <div className="event-div">
            <div className="event-img-div" id="ecofriendly" data-aos="zoom-out">
              <p>
                Eco-friendly <br />
                Ganapati Decoration <br /> Competition
              </p>
            </div>
          </div>
        </div>

        <div className="upcoming-div" data-aos="zoom-out">
          <div className="event-div">
            <div className="event-img-div" id="overseas" data-aos="zoom-out">
              <p>
                EDUCATION & CAREER
                <br /> OPPURTUNITIES <br /> ABROAD
              </p>
            </div>
          </div>

          <div className="event-info" data-aos="zoom-out">
            <b>About Event :</b>
            <p style={{ paddingBottom: 16 }}>
              From enhancing your global network to experiencing
              <br /> a new culture, the benefits to your
              <br /> education and career abroad is significant !!
            </p>
            <p>Date of Event - 13th August, Saturday</p>
            <p>Time - 2PM IST</p>
            <div className="buttons">
              {/* <Link to="/summary"><button  onClick="window.scrollTo(0, 0)" className='register'>Event Summary</button></Link> */}
              <a target="_blank" href="./Images/overseas.jpeg">
                <button className="btninfo" id="overseasbtn">
                  <ion-icon
                    style={{ padding: 0, fontSize: 24 }}
                    name="arrow-forward-circle"
                  ></ion-icon>
                  MORE INFO
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="upcoming-div" id="reverse" data-aos="zoom-out">
          <div className="event-info" data-aos="zoom-out">
            <b>About Event :</b>
            <p style={{ paddingBottom: 5 }}>
              A Webinar on latest technologies <br />
              like Augmented Reality and Virtual Reality
            </p>
            <p>Date - 22nd April</p>
            <p>Mode - Online</p>

            <div className="buttons">
              <a target="_blank" href="./Images/ar.jpeg">
                <button className="btninfo" id="arbtn">
                  <ion-icon
                    style={{ padding: 0, fontSize: 24 }}
                    name="arrow-forward-circle"
                  ></ion-icon>
                  MORE INFO
                </button>
              </a>
            </div>
          </div>

          <div className="event-div">
            <div className="event-img-div" id="ar-div" data-aos="zoom-out">
              <p style={{ fontSize: 50 }}>
                AR/VR <br />
                Webinar
              </p>
            </div>
          </div>
        </div>

        <div className="upcoming-div" data-aos="zoom-out">
          <div className="event-div">
            <div className="event-img-div" id="essay-div" data-aos="zoom-out">
              <p>ESSAY</p>
            </div>
          </div>

          <div className="event-info" data-aos="zoom-out">
            <b>About Event :</b>
            <p style={{ paddingBottom: 5 }}>Technical Essay Competition</p>
            <b>Important Dates :</b>
            <p>Last Date of Registration - 19/05/2022</p>
            <p>Mode - Online</p>
            <p>Language - English</p>
            <div className="buttons">
              <a target="_blank" href="./Images/essay.pdf">
                <button className="btninfo" id="essay-btn">
                  <ion-icon
                    style={{ padding: 0, fontSize: 24 }}
                    name="arrow-forward-circle"
                  ></ion-icon>
                  Winner Team Essay
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="upcoming-div" id="poetry-upcoming" data-aos="zoom-out">
          <div className="event-info" data-aos="zoom-out">
            <b>About Event :</b>
            <p style={{ paddingBottom: 5 }}>Online Poetry Competition</p>
            <b>Important Dates :</b>
            <p>Last Date of Registration - 22/03/2022</p>
            <p>Result Declaration - 27/03/2022</p>
            <br />
            <p>Winner : Ganesh Masute</p>
            <div className="buttons">
              {/* <a target="_blank" href="https://forms.gle/N8YCTp1SFTdSc6mR8"><button className='register' id='poetry-btn'>REGISTER</button></a> */}
              <a target="_blank" href="./Images/poem.pdf">
                <button className="btninfo" id="poetry-btn">
                  <ion-icon
                    style={{ padding: 0, fontSize: 24 }}
                    name="arrow-forward-circle"
                  ></ion-icon>
                  Winner's Poem
                </button>
              </a>
            </div>
          </div>
          <div className="event-div">
            <div className="event-img-div" id="poetry-div" data-aos="zoom-out">
              <p>POETRY</p>
            </div>
          </div>
        </div>

        <div className="upcoming-div" data-aos="zoom-out">
          <div className="event-div">
            <div className="event-img-div" data-aos="zoom-out">
              <p>LOGICA</p>
            </div>
          </div>
          <div className="event-info" data-aos="zoom-out">
            <b>About Event :</b>
            <p style={{ paddingBottom: 16 }}>
              Online National Level Project Competition
            </p>
            <b>Important Dates :</b>
            <p>Last Date of Registration - 22/03/2022</p>
            <p>Date of Competition - 26/03/2022</p>
            <div className="buttons">
              <Link to="/summary">
                <button onClick="window.scrollTo(0, 0)" className="register">
                  Event Summary
                </button>
              </Link>
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
