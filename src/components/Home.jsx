import React from "react";
import "../styles/Home.css";
import Playlist from "./Playlist";
import Popular from "./Popular";
function Home() {
  return (
    <div className="home">
      <div className="home-wrapper">
        <div className="input-search">
          <input
            type="search"
            name="search"
            placeholder="Search for songs, artists"
          />
        </div>
        <Popular />
        <Playlist />
      </div>
    </div>
  );
}

export default Home;
