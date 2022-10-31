import React from "react";

function Navbar() {
  return (
    <>
      <div className="wrapper">
        <div className="navbar-left">
          <div className="search"></div>
        </div>
        <div className="navbar-right">
          <div className="notification"></div>
          <div className="profile"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
