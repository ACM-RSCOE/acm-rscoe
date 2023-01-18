import React,{useEffect} from 'react'
import Carousel from '../Carousel'
import Events from './Events';
import "../../App.css";
import { Link } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css"
import Footer from '../Footer';
import Latest from '../Latest';
import Modal from '../Modal';
import { useState } from 'react';


const Home = () => {

  const [show, setShow] = useState(true);

  useEffect(() => {
    const modal = setTimeout(() => {
       setShow(false)
    },5000)

    return () => clearTimeout(modal)
  },[])

    useEffect(() => {
        Aos.init({duration:1500})
   },[])

  if(show){
    return(
      <Modal show={show} setShow={setShow}/>
    )
  }
  return (
      <>
 
    <Carousel/>
   
  <Latest />
    <Footer />
    </>
  )
}

export default Home