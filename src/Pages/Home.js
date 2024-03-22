import React, { useEffect } from 'react'
import Header from '../Components/Header'
import Team from '../Components/Team'
import Galley from '../Components/Galley'
import Contact from '../Components/Contact'
import "./Home.css"

function Home() {
  useEffect(()=>{
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          entry.target.classList.add('show')
        }else{
          entry.target.classList.remove('show')
        }
      })
    },[])
    const observerLeft = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          entry.target.classList.add('show-left')
        }else{
          entry.target.classList.remove('show-left')
        }
      })
    },[])
    const observerRight = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          entry.target.classList.add('show-right')
        }else{
          entry.target.classList.remove('show-right')
        }
      })
    },[])
  
    const hiddenElements = document.querySelectorAll('.hidden')
    const hiddenElementsLeft = document.querySelectorAll('.hidden-left')
    const hiddenElementsRight = document.querySelectorAll('.hidden-right')
    hiddenElements.forEach((el)=> observer.observe(el))
    hiddenElementsLeft.forEach((el)=> observerLeft.observe(el))
    hiddenElementsRight.forEach((el)=> observerRight.observe(el))

  },[]) 
  return (
    <div>
        <Header/>
        <Team/>
        <Galley/>
        <Contact/>
    </div>
  )
}

export default Home