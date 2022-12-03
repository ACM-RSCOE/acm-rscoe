import React from 'react'
import { useEffect } from 'react'
import Navbar from '../Navbar'
import Carousel from 'react-bootstrap/Carousel'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Childrensday = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <>
      <Navbar />
      <div className="childrensday-title">
        <p className="upcoming" data-aos="flip-up">
          <ion-icon
            style={{ paddingTop: 50 }}
            name="desktop-outline"
          ></ion-icon>
          Children's Day Glimpse
        </p>
      </div>

      <div className="childrensday-carousel" data-aos="flip-up">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="./Images/children's_day/CD.JPG"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="./Images/children's_day/CD1.JPG"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="./Images/children's_day/CD2.JPG"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="./Images/children's_day/CD3.JPG"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="./Images/children's_day/CD4.JPG"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="./Images/children's_day/CD5.JPG"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="./Images/children's_day/CD6.JPG"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  )
}

export default Childrensday
