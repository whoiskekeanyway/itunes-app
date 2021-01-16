import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import search from './search.svg'

function Home() {
  return (
    <div className="home-container">
      <h3>SEARCH FOR</h3>
      <div className="home-wrap">
      <Link to="/movies" className="link">
                Movies
            </Link>
            <Link to="/music" className="link">
                Music
            </Link>
            <Link to="/audiobooks" className="link">
                Audio Books
            </Link>
            <Link to="/videos" className="link">
                Videos
            </Link>
        <img
          src={search}
          alt="music"
          width="80%"
          height="380"
          className="searchimage"
        />
      </div>
      <br />


    </div>
  );
}

export default Home;
