import React from 'react'
import './Functions.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCirclePlay,faCirclePause,faBackward,faForward} from '@fortawesome/free-solid-svg-icons'
export default function Functions({AudiPause,AudioPlay,isPlaying, NextSong ,PrevSong}) {
    
    
  return (
   <>
   <button type='button' onClick={PrevSong} style={{backgroundColor:'transparent',border:'0px'}}>

   <FontAwesomeIcon icon={faBackward } style={{height:'20px',cursor:'pointer'}} />
   </button>
    {
      isPlaying===false
       ?<button type='button' onClick={AudioPlay} style={{backgroundColor:'transparent',border:'0px'}}>
          <FontAwesomeIcon icon={faCirclePlay } style={{paddingLeft:'40px',paddingRight:'40px',height:'30px',
           marginTop:'-5px',cursor:'pointer'}} />
        </button>
        :<button type='button' onClick={AudiPause} style={{backgroundColor:'transparent',border:'0px'}}>
          <FontAwesomeIcon icon={faCirclePause } style={{paddingLeft:'40px',paddingRight:'40px',height:'30px',
        marginTop:'-5px',cursor:'pointer'}}  />
    </button> 
    }

   <button type='button' onClick={NextSong} style={{backgroundColor:'transparent',border:'0px'}}>
   <FontAwesomeIcon icon={faForward } style={{height:'20px',cursor:'pointer'}} />
 
   </button>
   </>
  )
}
