import React from "react";
import "../styles/Wallpaper.css";
function Wallpaper() {
  return (
    <div className="wallpaper">
      <div className="wallpaper-container">
        <div className="navbar">
          <div className="navbar-wrapper">
            <div className="notification icon">
              <img src="https://www.svgrepo.com/show/16594/bell.svg" alt="" />
            </div>
            <div className="profile"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallpaper;
