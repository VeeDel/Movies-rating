import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./components/card";
import SearchBar from "./components/SearchBar";
import MovieDetails from "./components/pages/MovieDetails";
import AllCastt from "./components/pages/AllCast/AllCastt";
import Footer from "./components/Footer/Footer";
import "./App.css";
import PersonDetails from "./components/person/PersonDetails";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <div className="container">
        <BrowserRouter>
          <Routes exact path="/" element={<Card />} />
          <Routes>
            <Route exact path="/movie/:id" element={<MovieDetails />} />
            <Route exact path={`/movie/:id/allcasts`} element={<AllCastt />} />
            <Route exact path={`/person/:id`} element={<PersonDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
