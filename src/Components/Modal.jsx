import React from 'react'

const Modal = ({ show, setShow }) => {

  return (
    <div className='big-modal'>
    
    <div className='modal-div'>
    <div className='close-div'>
        <button className='close' onClick={() => setShow(false)}>x</button>
    </div>
        <img src="./Images/award.png" className='modal-img'></img>
        <p className='modal-txt'>JSPM RSCOE ACM Student Chapter won <strong>"<span style={{color:"#D79929"}}>Outstanding Emerging Chapter Award 2022</span>" from ACM India</strong></p>
        <button className='btninfo' onClick={() => setShow(false)} id='modal-btn'>Great!</button>
    </div>
    </div>
  )
}

export default Modal