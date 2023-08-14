import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import SearchBar from "../SearchBar";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <h2 className="navbar-brand">Navbar</h2>
          <SearchBar />
        </div>
      </nav>
    </div>
  );
}
