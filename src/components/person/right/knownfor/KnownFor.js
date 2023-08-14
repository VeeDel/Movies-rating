import React, { useEffect, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import ReactTooltip from "react-tooltip";

import "./knownfor.css";

export default function Knownfor({ id }) {
  // const id = "19537";
  const API_KEY = "9bc0659549309aef9ec3e87e06ce093e";
  const [person, setPerson] = useState(null);
  const [topMovies, setTopMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const {
    data,
    error: fetchError,
    loading: fetchLoading,
  } = useFetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&append_to_response=movie_credits`
  );

  useEffect(() => {
    if (fetchLoading) {
      setLoading(true);
      setError(null);
    } else if (fetchError) {
      setLoading(false);
      setError(fetchError.message);
    } else if (data) {
      setPerson(data);
      const filteredMovies = data.movie_credits?.cast?.filter(
        (movie) => movie.backdrop_path !== null
      );
      setTopMovies(filteredMovies?.slice(0, 8) || []);
      setLoading(false);
    }
  }, [data, fetchError, fetchLoading]);

  if (loading) {
    return (
      <>
        <h2 style={{ margin: "1rem 0 0 3rem" }}>Known For</h2>
        {fetchLoading ? (
          <div className="skeleton-loading-page">
            <div className="skeleton-loading-card shining"></div>
            <div className="skeleton-loading-card flashing"></div>
            <div className="skeleton-loading-card shining"></div>
            <div className="skeleton-loading-card flashing"></div>
          </div>
        ) : (
          <div className="movies-main-div">
            {topMovies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <a href={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-image"
                  />
                  <p className="movie-card-title">{movie.title}</p>
                </a>
              </div>
            ))}
          </div>
        )}
      </>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h2 style={{ margin: "1rem 0 0 3rem" }}>Known For</h2>
      <div className="movies-main-div">
        {topMovies.map((movie) => {
          return (
            <div key={movie.id} className="movie-card">
              <a href={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-image"
                />
                <p className="movie-card-title">{movie.title}</p>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

{
  /* <div className={"movie-list"}>
  {topMovies.map((movie) => (
    <div key={movie.id} className="movie-item">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-image"
      />
      <p className="movie-title">{movie.title}</p>
    </div>
  ))}
</div> */
}
