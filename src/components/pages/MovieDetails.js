import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./moviedetails.css";
import { useFetch } from "../hooks/useFetch";
import CastDetails from "../CastDetails";
import TrailerWindow from "../trailer/TrailerWindow";

export default function MovieDetails() {
  const { id } = useParams();
  const API_KEY = "9bc0659549309aef9ec3e87e06ce093e";
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;
  const videosUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
  const [trailerKey, setTrailerKey] = useState("");

  const {
    data: movieData,
    error: movieError,
    isPending: moviePending,
  } = useFetch(url);
  const {
    data: castData,
    error: castError,
    isPending: castPending,
  } = useFetch(castUrl);
  const {
    data: videosData,
    error: videosError,
    isPending: videosPending,
  } = useFetch(videosUrl);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (castData) {
      setCast(castData.cast);
    }
  }, [castData]);

  useEffect(() => {
    if (videosData && videosData.results.length > 0) {
      const trailer = videosData.results.find(
        (video) => video.type === "Trailer"
      );
      if (trailer) {
        setTrailerKey(trailer.key);
      }
    }
  }, [videosData]);

  if (moviePending || castPending || videosPending) {
    return <div>Loading...</div>;
  }

  if (movieError || castError || videosError) {
    return <div>Error: {movieError || castError || videosError}</div>;
  }

  if (movieData) {
    const {
      backdrop_path,
      poster_path,
      title,
      release_date,
      genres,
      runtime,
      tagline,
      vote_average,
      overview,
    } = movieData;
    return (
      <div className="movie-details-container">
        <div
          className="background-cover"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop_path})`,
          }}
        ></div>

        <div
          className="main-content"
          style={{
            background: `url(https://image.tmdb.org/t/p/w500${backdrop_path}) center / cover no-repeat`,
          }}
        >
          <div
            className="main-poster"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})`,
            }}
          ></div>
          <div className="data-info">
            <h2>
              {title} ({release_date.substring(0, 4)})
            </h2>
            <p>
              {release_date} ·{" "}
              {genres.map((genre, index) => (
                <React.Fragment key={genre.id}>
                  <span>{genre.name}</span>
                  {index !== genres.length - 1 && <span>,</span>}
                </React.Fragment>
              ))}{" "}
              · {Math.floor(runtime / 60)}h {runtime % 60}m
            </p>
            <h7 style={{ fontStyle: "italic" }}>{tagline}</h7>
            <div className="progress-bar-container">
              <h7>
                <label htmlFor="html">{vote_average.toFixed(1)} ⭐</label>
              </h7>
              <div className="progress-bar html">
                <progress
                  id="html"
                  min="0"
                  max="100"
                  value={`${vote_average}` * 10}
                ></progress>
              </div>
            </div>
            <p>{overview}</p>
          </div>
        </div>
        <CastDetails cast={cast} data={movieData} id={id} />
        {trailerKey && <TrailerWindow trailerKey={trailerKey} id={id} />}
      </div>
    );
  }
}
