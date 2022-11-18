import React from "react";
import { ReactComponent as Play } from "../assets/play.svg";
import { ReactComponent as Pause } from "../assets/pause.svg";
import { ReactComponent as Next } from "../assets/next.svg";
import { ReactComponent as Prev } from "../assets/previous.svg";
import { ReactComponent as FastForward } from "../assets/fastforward.svg";
import { ReactComponent as FastBackward } from "../assets/fastbackward.svg";
import "../styles/AudioControls.css";

function AudioControls() {
  return (
    <div className="audio-controls-wrapper">
      <button type="button" className="prev" aria-label="Previous">
        <Prev />
      </button>

      <button type="button" className="fastbackward" aria-label="Fastbackward">
        <FastBackward />
      </button>

      <button type="button" className="pause" aria-label="Pause">
        <Pause />
      </button>

      {/* <button type="button" className="play" aria-label="Play">
        <Play />
      </button> */}

      <button type="button" className="fastforward" aria-label="Fastforward">
        <FastForward />
      </button>

      <button type="button" className="next" aria-label="Next">
        <Next />
      </button>
    </div>
  );
}

export default AudioControls;
