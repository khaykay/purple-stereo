import React from "react";
import "../styles/AudioPlayer.css";
import AudioControls from "./AudioControls";
function AudioPlayer() {
  return (
    <div className="audioplayer">
      <div className="audioplayer-wrapper">
        <div className="track-image"></div>
        <div className="audio-controls">
          <AudioControls />
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
