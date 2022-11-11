import React from "react";
import "../styles/Popular.css";
import PopularSong from "./PopularSong";
function Popular() {
  return (
    <div className="popular box">
      <div className="popular-title title">popular</div>
      <div className="popular-song-section">
        <PopularSong />
        <PopularSong />
        <PopularSong />
      </div>
    </div>
  );
}

export default Popular;
