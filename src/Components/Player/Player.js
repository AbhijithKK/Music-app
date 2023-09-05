import React, {  useState } from "react";
import "./Player.css";
import Functions from "../Functions/Functions";
import SelectFile from "../SelectFile/SelectFile";
function Player() {
    const[song,setSongs]=useState('')
    const[nsong,setNsongs]=useState(false)
    const[psong,setPsongs]=useState(false)
    const[isPlaying,setIsplaying]=useState(false) 
    const[name,setName]=useState(' ')
    const AudioPlay=()=>{
        if (isPlaying===false) {
           song.play()
            setIsplaying(true)
        }else{
            song.pause()
            setIsplaying(false)
        }
    }
    const NextSong=()=>{
         console.log('nextsong');
         setNsongs(!nsong)
    }
    const PrevSong=()=>{
        console.log('prevsong');
        setPsongs(!psong)
    }
  return (
    <div className="container" style={{
        backgroundImage:'url(https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg)',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
        
    }}>
        <SelectFile setSongs={setSongs} nsong={nsong} psong={psong} setName={setName} />
      <div className="Player-body">
        <div className="imageDiv">
          <img
            className="images"
            src="https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg"
            alt=""
          />
          
        </div>
        <div className="texts">
            {name}<br/>
            <p><b>V1.1</b></p>
        </div>
        
        <div className="function">
          <Functions song={song}  AudioPlay={AudioPlay} isPlaying={isPlaying} NextSong={NextSong} PrevSong={PrevSong} />
        </div>
      </div>
    </div>
  );
}

export default Player;
