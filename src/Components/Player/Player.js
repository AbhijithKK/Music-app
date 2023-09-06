import React, {  useEffect, useState } from "react";
import "./Player.css";
import Functions from "../Functions/Functions";
import SelectFile from "../SelectFile/SelectFile";
function Player() {
    const[song,setSongs]=useState([])
    const[isPlaying,setIsplaying]=useState(false) 
    const[name,setName]=useState(' ')
    const [AudiRef,setAudiref]=useState(null)
useEffect(()=>{
 

},[AudiRef])
let i=0
    const AudioPlay=()=>{
        console.log(i);
          if (song.length > 0 && song.length-1>=i) {
            setName(song[i]?.name)
            let Audi=new Audio(URL.createObjectURL(song[i]))
            setAudiref(Audi)
            Audi.addEventListener('ended', () => { // Move event listener assignment here
              AudioPlay();
             
            })
            Audi.play() 
            i++
                     
          }else{
            i=0
            AudioPlay()
          }
            setIsplaying(true)
          
       
    }

    const NextSong=()=>{
        
    }
    const PrevSong=()=>{
       
    }
  return (
    <div className="container" style={{
        backgroundImage:'url(https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg)',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
        
    }}>
        <SelectFile setSongs={setSongs} />

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
