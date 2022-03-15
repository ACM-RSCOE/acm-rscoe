import React,{useEffect} from 'react'
import Carousel from '../Carousel'
import Events from './Events';
import "../../App.css"
import Aos from 'aos';
import "aos/dist/aos.css"

const Home = () => {
    useEffect(() => {
        Aos.init({duration:1500})
   },[])
  return (
      <>
   
    <Carousel/>
    <Events />
   
    </>
  )
}

export default Home