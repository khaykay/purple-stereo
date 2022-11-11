import React from "react";
import Sidebar from "./Sidebar";
import "../styles/Main.css";
import Home from "./Home";
import Wallpaper from "./Wallpaper";

function Main() {
  return (
    <div className="main">
      <Sidebar />
      <Home />
      <Wallpaper />
    </div>
  );
}

export default Main;
