import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../Constants/axios'
import { API_KEY,imageUrl } from '../../Constants/Constants'

export default function Banner(){
  const [movie,setMovie]=useState('')
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[1])
      setMovie(response.data.results[10])
    })
  },[])
  return(
    <div
      style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path: ""})`}}
      className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.title ? movie.title:movie.name : "------"}</h1>
        <div className='banner-buttons'>
          <button className='button'>Play</button>
          <button className='button'>To List</button>
        </div>
        <h2 className='description'>{movie ? movie.overview : "------"}</h2>
      </div>
      <div className='fade_bottom'></div>
    </div>
  )
}