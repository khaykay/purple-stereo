import React from "react";
import Main from "./Main";
import "../styles/PurpleStereo.css";
import AudioPlayer from "./AudioPlayer";
function PurpleStereo() {
  return (
    <div className="purple-stereo">
      <Main />
      <AudioPlayer />
    </div>
  );
}

export default PurpleStereo;
