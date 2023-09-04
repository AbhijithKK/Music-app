import React, { useEffect, useState } from 'react'
import './Functions.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCirclePlay,faCirclePause,faBackward,faForward} from '@fortawesome/free-solid-svg-icons'
import { GetArtist, TokenEndpoint } from '../../Api/Api'
export default function Functions({setSongs,AudioPlay,isPlaying}) {
    const[track,setTracks]=useState('')
    const Apis=async()=>{
        let data=await TokenEndpoint()
   let track=await GetArtist(data)
   let newtr=`${track}`
   setTracks(track)
   setSongs(newtr)
    }
   useEffect(()=>{
//   Apis()
   },[setSongs])
  return (
   <>
   <FontAwesomeIcon icon={faBackward } style={{height:'20px',cursor:'pointer'}} />
   <button type='button' onClick={AudioPlay} style={{backgroundColor:'transparent',border:'0px'}}>
    {
        isPlaying===false
         ? <FontAwesomeIcon icon={faCirclePlay } style={{paddingLeft:'40px',paddingRight:'40px',height:'30px',
        marginTop:'-5px',cursor:'pointer'}} />
        :   <FontAwesomeIcon icon={faCirclePause } style={{paddingLeft:'40px',paddingRight:'40px',height:'30px',
        marginTop:'-5px',cursor:'pointer'}}  />

    }

   </button>
   <FontAwesomeIcon icon={faForward } style={{height:'20px',cursor:'pointer'}} />
   </>
  )
}
