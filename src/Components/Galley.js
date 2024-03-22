import React from 'react'
import pic1 from "../Assets/Gallery/WhatsApp Image 2024-03-22 at 8.25.45 PM(1).jpeg"
import pic2 from "../Assets/Gallery/WhatsApp Image 2024-03-22 at 8.25.45 PM.jpeg"
import pic3 from "../Assets/Gallery/WhatsApp Image 2024-03-22 at 8.25.46 PM(1).jpeg"
import pic4 from "../Assets/Gallery/WhatsApp Image 2024-03-22 at 8.25.46 PM.jpeg"
import pic5 from "../Assets/Gallery/WhatsApp Image 2024-03-22 at 8.25.47 PM(1).jpeg"
import pic6 from "../Assets/Gallery/WhatsApp Image 2024-03-22 at 8.25.47 PM.jpeg"
import pic7 from "../Assets/Gallery/WhatsApp Image 2024-03-22 at 8.25.48 PM.jpeg"
import "./Gallery.css"

function Galley() {
    const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic1]
  return (
    <div id='gallery'>
        <h3 className='mb-4 mt-5'>Gallery</h3>
        <div className='image-gallery px-lg-5 mb-5 pb-4'>
                {images?images.map((im,i)=>{
                    return (
                        <li key={i} className={i%2==0?'m-4 hidden-right':'m-4 hidden-left'} >
                            <img loading='lazy' className='skeleton' src={im} />
                        </li>
                    ) 
                }):''}
            </div>
    </div>
  )
}

export default Galley