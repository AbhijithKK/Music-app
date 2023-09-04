import React from "react";
import "./Player.css";
import Functions from "../Functions/Functions";
function Player() {
  return (
    <div className="container" style={{
        backgroundImage:'url(https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg)',
        backgroundRepeat:'no-repeat',
        
        backgroundSize:'cover'
        
    }}>
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
            
        </div>
        <div className="function">
          <Functions />
        </div>
      </div>
    </div>
  );
}

export default Player;
