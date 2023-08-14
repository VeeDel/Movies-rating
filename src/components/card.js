import React, { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import "./cards.css";
import EachCard from "./cards/EachCard";

export default function Card({ name }) {
  const API_KEY = "9bc0659549309aef9ec3e87e06ce093e";
  const [movies, setMovies] = useState();
  const { data, error, loading } = useFetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${name}`
  );

  useEffect(() => {
    if (data) {
      setMovies(data);
    }
  }, [data]);

  return (
    <div>
      <div className="card-deck">
        {error && <div>{error.message}</div>}
        {loading && (
          <div className="loading-container">
            <div className="loader"></div>
          </div>
        )}
        {movies && <EachCard data={movies} />}
      </div>
    </div>
  );
}
