import React from "react";
import "../styles/Sidebar.css";
function Sidebar() {
  return (
    <>
      <div className="home icon">
        <img src="https://www.svgrepo.com/show/14443/home.svg" alt="" />
      </div>
      <div className="favourite icon">
        <img src="https://www.svgrepo.com/show/423782/love.svg" alt="" />
      </div>
      <div className="song icon">
        <img src="https://www.svgrepo.com/show/371994/music-note.svg" alt="" />
      </div>
      <div className="artist icon">
        <img src="https://www.svgrepo.com/show/75908/donut.svg" alt="" />
      </div>
      <div className="settings icon">
        <img src="https://www.svgrepo.com/show/22172/settings.svg" alt="" />
      </div>
      <div className="tag icon">
        <img src="https://www.svgrepo.com/show/28799/tag.svg" alt="" />
      </div>
    </>
  );
}

export default Sidebar;
