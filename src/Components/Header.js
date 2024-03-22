import React from 'react'
import Navbar from './Navbar'
import "./Header.css"
import Typewriter from "typewriter-effect";

function Header() {
  return (
    <div className=''>
        <Navbar/>
        <div className='d-flex header hidden-left justify-content-center align-items-center flex-column'>
            <h3 className='heading'>
                UNITY
            </h3>
            <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("One Team, One Dream")
                                .start();
                        }}
                    />
        </div>
    </div>
  )
}

export default Header