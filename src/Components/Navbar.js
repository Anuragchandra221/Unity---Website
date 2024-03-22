import React from 'react'
import "./Navbar.css"
import logo from "../Assets/WhatsApp_Image_2024-03-22_at_5.20.19_PM-removebg-preview.png"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md" id='navbar' >
      <a class="navbar-brand" href="/" >
        <div className='logo'>
                <img src={logo} style={{cursor: 'pointer', zIndex: '4'}}/>
            </div>
      </a>
  
    <button className="navbar-toggler" style={{zIndex: '2'}} type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav ml-auto" style={{zIndex: '2'}}>
        <li className="nav-item">
          <a className="nav-link" href="#team">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#gallery">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav> 
  )
}

export default Navbar