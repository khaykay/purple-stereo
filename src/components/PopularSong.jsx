import React from "react";
import "../styles/PopularSong.css";
function PopularSong() {
  return (
    <div className="popular-song">
      <div className="star-popular-song">
        <img
          src="https://www.svgrepo.com/show/22427/star.svg"
          alt=""
          className="small-icon"
        />
      </div>
      <div className="popular-song-profile"></div>
      <div className="details-popular-song">
        <div className="popular-song-title">Lorem ipsum dolor sit amet.</div>
        <div className="popular-song-artist">Lorem, ipsum.</div>
      </div>
      <div className="like-popular-song">
        <img
          src="https://www.svgrepo.com/show/356553/love.svg"
          alt=""
          className="small-icon"
        />
      </div>
      <div className="play-rate">
        <img
          src="https://www.svgrepo.com/show/327472/play.svg"
          alt=""
          className="small-icon"
        />
      </div>
    </div>
  );
}

export default PopularSong;
