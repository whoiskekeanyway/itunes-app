import React from "react";
import { Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
import itunes from './itunes.png'

function NavBar() {
  return (
    <header>
      <Navbar>
         <Navbar.Brand href="/">
           <img src={itunes}
           width="80"
           height="90"
           className="logo-image"
           alt="React Bootstrap logo" />
         </Navbar.Brand>
           <Link to="/movies" className="links">
                Movies
            </Link>
            <Link to="/music" className="links">
                Music
            </Link>
            <Link to="/audiobooks" className="links">
                Audio Books
            </Link>
            <Link to="/videos" className="links">
                Videos
            </Link>
      </Navbar>
    </header>
  );
}

export default NavBar;
