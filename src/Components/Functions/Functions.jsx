import React from 'react'
import './Functions.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCirclePlay,faCirclePause,faBackward,faForward} from '@fortawesome/free-solid-svg-icons'
export default function Functions() {
  return (
   <>
   <FontAwesomeIcon icon={faBackward } style={{height:'20px',cursor:'pointer'}} />
   <FontAwesomeIcon icon={faCirclePlay } style={{paddingLeft:'40px',paddingRight:'40px',height:'30px',
   marginTop:'-5px',cursor:'pointer'}} />
   {/* <FontAwesomeIcon icon={faCirclePause } style={{paddingLeft:'10px',paddingRight:'10px'}}  /> */}
   <FontAwesomeIcon icon={faForward } style={{height:'20px',cursor:'pointer'}} />
   </>
  )
}
