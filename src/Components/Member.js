import React from 'react'
import './Member.css'

function Member(props) {
  return (
    <div className='member'>
        <img src={props.img} />
        <p className='m-0 mt-3'>{props.name}</p>
        <p className='m-0 mt-2'>{props.position}</p>
    </div>
  )
}

export default Member