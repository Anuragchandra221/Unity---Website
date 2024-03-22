import React from 'react'
import "./Contact.css"
import logo from "../Assets/WhatsApp_Image_2024-03-22_at_5.20.19_PM-removebg-preview.png"
import insta from "../Assets/insta.png"
import yt from "../Assets/yt.png"

function Contact() {
  return (
    <div id='contact' className='contact d-flex justify-content-around pb-4 hidden-left  align-items-center'>
        <div className='contact-img '>
            <a href='/'><img src={logo}/></a>
        </div>
        <div className='text-center text-lg-right'>
            <a href='https://www.instagram.com/csevast/'><img src={insta} className='logos mx-4' /></a>
        </div>
        <div className='text-center text-lg-right'>
            {/* <a href='https://www.instagram.com/csevast/'><img src={insta} className='logos mx-4' /></a> */}
            <a href='https://www.youtube.com/@vastcse'><img src={yt} className='logos ' /></a>
        </div>
    </div>
  )
}

export default Contact