import React from "react";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <>
      <div className="nav-wrapper">
        <div className="navbar-right">
          <div className="navbar-right-wrapper">
            <div className="notification icon">
              <img src="https://www.svgrepo.com/show/16594/bell.svg" alt="" />
            </div>
            <div className="profile"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
