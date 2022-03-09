import React,{useEffect} from 'react'
import Carousel from '../Carousel'
import Latest from '../Latest'
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
    <Latest />
   
    </>
  )
}

export default Home