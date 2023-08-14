import React from "react";
import MovieKeywords from "../keywords/Keywords";
import "./trailerwindow.css";

export default function TrailerWindow({ trailerKey, id }) {
  //   const {
  //     data: videosData,
  //     error: videosError,
  //     isPending: videosPending,
  //   } = useFetch(videosUrl);
  return (
    <div className="trailer-keywords">
      {" "}
      <div className="trailer-container">
        <iframe
          title="Movie Trailer"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="keyword-container">
        <MovieKeywords id={id} />
      </div>
    </div>
  );
}
