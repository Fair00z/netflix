import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../Constants/axios'
import {imageUrl } from '../../Constants/Constants'

export default function RowPost(props){
  const [movie,setMovie]=useState([])
  useEffect(()=>{
    axios.get(props.url).then((Response)=>{
      setMovie(Response.data.results)
    })
  },[])
  return(
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
      {movie.map((obj)=>
        <img className={props.class} alt='poster' src={`${imageUrl+obj.backdrop_path}`}></img>
      )}
        
      </div>
    </div>
  )
}