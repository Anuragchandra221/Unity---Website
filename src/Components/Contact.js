import React from 'react'
import "./Contact.css"
import logo from "../Assets/WhatsApp_Image_2024-03-22_at_5.20.19_PM-removebg-preview.png"
import insta from "../Assets/insta.png"
import yt from "../Assets/yt.png"
import tele from "../Assets/tele.png"

function Contact() {
  return (
    <div id='contact' className='contact d-flex justify-content-around pb-4 hidden-left  align-items-center'>
        <div className=''>
            <a href='/'><img className='contact-img' src={logo}/></a>
        </div>
        <div className='text-center text-lg-right'>
            <a href='https://www.instagram.com/p/C40fR4PvH5i/?igsh=MXM2Y241eHpscGZxYw%3D%3D&img_index=1'><img className='contact-img logos mx-4' src={insta} /></a>
        </div>
        <div className='text-center text-lg-right'>
            {/* <a href='https://www.instagram.com/csevast/'><img src={insta} /></a> */}
            <a href='https://www.youtube.com/@Unity1team1dream'><img className='contact-img logos mx-4' src={yt} /></a>
        </div>
        <div className='text-center text-lg-right'>
            {/* <a href='https://www.instagram.com/csevast/'><img src={insta} /></a> */}
            <a href='https://t.me/+CnXhMLi9fWE3Y2Nh'><img className='contact-img logos mx-4' src={tele} /></a>
        </div>
    </div>
  )
}

export default Contact