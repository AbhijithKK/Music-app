import React, { useEffect, useState } from "react";
import "./Player.css";
import Functions from "../Functions/Functions";
import SelectFile from "../SelectFile/SelectFile";
function Player() {
  const [song, setSongs] = useState([]);
  const [isPlaying, setIsplaying] = useState(false);
  const [name, setName] = useState("");
  const [AudiRef, setAudiref] = useState(null);
  const [index, setIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(null);
  const [currentDuration, setCurrentDuration] = useState(null);
  const [isPaused, setIsPaused] = useState(false); 
  useEffect(() => {}, [AudiRef]);
  let i = 0;
  const AudioPlay = (j) => {
    console.log(isPaused);
if (!isPaused) {
  
    console.log(i);
    if (j) {
      i = j;
    }
    if (song.length > 0 && song.length - 1 >= i) {
      setName(song[i]?.name);
      
      let Audi = new Audio(URL.createObjectURL(song[i]));
      setAudiref(Audi);
      setIndex(i);
      Audi.addEventListener("timeupdate", () => {
        setCurrentDuration(Audi.duration);
        setCurrentTime(Audi.currentTime);
      });
      Audi.addEventListener("ended", () => {
        AudioPlay();
      })
        Audi.play();
      i++;
    } else {
      i = 0;
      AudioPlay();
    }
    setIsplaying(true);
  }else{
    AudiRef.play()
    setIsplaying(true);
  }
  };
  const AudiPause = () => {
    setIsplaying(false);
    AudiRef.pause();
    setIsPaused(true)
    // AudioPlay()
  };
  const NextSong = () => {
    AudiRef.pause();
    setIsPaused(false)
    let i = index + 1;
    AudioPlay(i);
  };
  const PrevSong = () => {
    setIsPaused(false)
    if (AudiRef) {
      if (AudiRef.play()) {
        AudiRef.pause();
      }
    }
    let i = index - 1;
    if (i < 0) {
      i = song?.length - 1;
    }
    AudioPlay(i);
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage:
          "url(https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <SelectFile setSongs={setSongs} />

      <div className="Player-body">
        <div className="imageDiv">
          <img
            className="images"
            src="https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg"
            alt=""
          />
        </div>
        <div className="texts" style={{textAlign:name===''?'center':'' }}>
          {name===''
          ?"Click the play button and enjoy music" :name}
          <br />
          <p>
            <b>V1.2</b>
          </p>
        </div>
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{ width: `${(currentTime / currentDuration) * 100}%` }}
          ></div>
        </div>

        <div className="function">
          <Functions
            AudiPause={AudiPause}
            song={song}
            AudioPlay={AudioPlay}
            isPlaying={isPlaying}
            NextSong={NextSong}
            PrevSong={PrevSong}
          />
        </div>
      </div>
    </div>
  );
}

export default Player;
