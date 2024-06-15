import React from 'react'
import './Banner.css'

export default function Banner(){
  return(
    <div className='banner'>
      <div className='content'>
        <h1 className='title'>Movie Title</h1>
        <div className='banner-buttons'>
          <button className='button'>Play</button>
          <button className='button'>To List</button>
        </div>
        <h2 className='description'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on</h2>
      </div>
      <div className='fade_bottom'></div>
    </div>
  )
}