import React, { useEffect, useState } from 'react'
import './RowPost.css'
import YouTube from 'react-youtube'
import axios from '../../Constants/axios'
import {imageUrl,API_KEY } from '../../Constants/Constants'

export default function RowPost(props){
  const [movie,setMovie]=useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then((Response)=>{
      setMovie(Response.data.results)
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls:0,
      iv_load_policy:3
    },
  };
  const handlMovie = (id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if (response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }
    })
  }
  return(
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
      {movie.map((obj)=>
        <img onClick={()=>handlMovie(obj.id)} className={props.class} alt='poster' src={`${imageUrl+obj.backdrop_path}`}></img>
      )}
        
      </div>
      { urlId && <YouTube iframeClassName='youtube' videoId={urlId.key} opts={opts} />}
    </div>
  )
}