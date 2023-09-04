import React, { useRef, useState } from "react";
import "./Player.css";
import Functions from "../Functions/Functions";
import SelectFile from "../SelectFile/SelectFile";
function Player() {
    const[song,setSongs]=useState('')
    const[isPlaying,setIsplaying]=useState(false)
    const audoRef=useRef(null)
    const AudioPlay=()=>{
        if (audoRef.current.paused) {
            audoRef.current.play()
            setIsplaying(true)
        }else{
            audoRef.current.pause()
            setIsplaying(false)
        }
    }
  return (
    <div className="container" style={{
        backgroundImage:'url(https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg)',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
        
    }}>
        <SelectFile/>
      <div className="Player-body">
        <div className="imageDiv">
          <img
            className="images"
            src="https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg"
            alt=""
          />
          
        </div>
        <div className="texts">
            names<br/>
            <p>artist</p>
            <audio ref={audoRef} src={song} >aaaaa</audio>
        </div>
        
        <div className="function">
          <Functions setSongs={setSongs}  AudioPlay={AudioPlay} isPlaying={isPlaying} />
        </div>
      </div>
    </div>
  );
}

export default Player;
