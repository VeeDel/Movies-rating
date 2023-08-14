import React from "react";
import imageNotAvailable from "../imgs/image_not_available.png";
import { Link, BrowserRouter } from "react-router-dom";

export default function EachCard({ data }) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {data.results.map((movie) => (
        <div
          key={movie.id}
          className="card cards"
          style={{ maxWidth: "16rem" }}
        >
          <Link
            to={`/movie/${movie.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : imageNotAvailable
              }
              className="card-img-top"
              alt={movie.title}
            />
          </Link>

          <div className="card-body">
            <h6 className="card-title">{movie.title}</h6>
            <p>{movie.release_date}</p>
            <p>⭐{movie.vote_average.toFixed(1)}</p>
          </div>
        </div>
      ))}
    </BrowserRouter>
  );
}
