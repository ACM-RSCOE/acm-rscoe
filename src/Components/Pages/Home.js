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

    useEffect(() => {
        Aos.init({duration:1500})
   },[])

  return (
      <>
 
    <Carousel/>
   
  <Latest />
    <Footer />
    </>
  )
}

export default Home