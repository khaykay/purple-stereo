import React from "react";
import "../styles/Playlist.css";
function Playlist() {
  return (
    <div className="playlist box">
      <div className="playlist-title title">playlist</div>
      <div className="playlist-heading">Best of</div>
      <div className="playlists-section">
        <div className="playlists"></div>
        <div className="playlists"></div>
        <div className="playlists"></div>
      </div>
    </div>
  );
}

export default Playlist;
