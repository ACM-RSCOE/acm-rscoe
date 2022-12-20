import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Navbar from '../../Navbar'

import Aos from 'aos'
import 'aos/dist/aos.css'

import './CD.css'

const CDevents = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <>
      <Navbar />
      <div className="Carousel-container" data-aos="flip-up">
        <Carousel className="Carousel">
          <div>
            <img src="./Images/CD/CD1.jpg" />
          </div>
          <div>
            <img src="./Images/CD/CD2.jpg" />
          </div>
          <div>
            <img src="./Images/CD/CD3.jpg" />
          </div>
          <div>
            <img src="./Images/CD/CD4.jpg" />
          </div>
          <div>
            <img src="./Images/CD/CD5.jpg" />
          </div>
          <div>
            <img src="./Images/CD/CD6.jpg" />
          </div>
          <div>
            <img src="./Images/CD/CD7.jpg" />
          </div>
          <div>
            <img src="./Images/CD/CD8.jpg" />
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default CDevents
