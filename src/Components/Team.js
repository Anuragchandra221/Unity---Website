import React from 'react'
import gokul from '../Assets/Team/gokul rajesh.jpeg'
import alan from "../Assets/Team/alan p a.jpeg"
import adwaith from "../Assets/Team/adwaith aji.jpeg"
import kevin from "../Assets/Team/kevin joshy.jpeg"
import asish from "../Assets/Team/asish.jpeg"
import ans from "../Assets/Team/ans tomy.jpeg"
import lakshmi from "../Assets/Team/lakshmi manoj.jpeg"
import annila from "../Assets/Team/annila v b.jpeg"
import yadhu from "../Assets/Team/yadhukrishnan namboothiri.jpeg"
import Member from './Member'
import "./Team.css"

function Team() {
  return (
    <div className='mb-4 hidden' id='team'>
        <h3 className='mb-4'>
            Team
        </h3>
        <div className='d-flex justify-content-center align-items-center flex-wrap team'>
            <Member img={kevin} name="Kevin Joshy" position="Captain" />    
            <Member img={gokul} name="Gokul Rajesh" position="Vice Captain" />    
            <Member img={alan} name="Alan P A" position="Member" />    
            <Member img={lakshmi} name="Lakshmi Manoj" position="Member" />    
            <Member img={ans} name="Ans Tomy" position="Member" />
            <Member img={yadhu} name="Yadhukrishnan Namboothiri" position="Member" />
            <Member img={annila} name="Annila V B" position="Member" />
            <Member img={adwaith} name="Adwaith Aji" position="Member" />
            <Member img={asish} name="Asish Chandra" position="Member" />
        </div>
    </div>
  )
}

export default Team