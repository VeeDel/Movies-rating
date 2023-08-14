import React, { useState } from "react";
import "./searchbar.css";
import Card from "./card";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function SearchBar() {
  const [movieName, setMovieName] = useState("");
  const [searchMovie, setSearchMovie] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // window.location.href = "/"; // Navigate to the homepage
    const movieSearch = () => {
      if (movieName) {
        setSearchMovie(movieName);
        setMovieName("");
      }
    };
    movieSearch();
  };

  return (
    <div className="navbar-main">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <ul className="nav nav-underline">
            <li className="nav-item">
              <a className="nav-link links active" href="/">
                <i class="fa-solid fa-house" style={{ color: "#333" }}></i>
              </a>
            </li>
          </ul>
          <form onSubmit={handleSearch} className="d-flex" role="search">
            <input
              className="form-control me-2"
              onChange={(e) => setMovieName(e.target.value)}
              type="search"
              placeholder="Search here..."
              value={movieName}
              required
            />
            <button
              style={{ background: "#333" }}
              className="btn btn-dark"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
      {searchMovie && <Card name={searchMovie} />}
    </div>
  );
}
