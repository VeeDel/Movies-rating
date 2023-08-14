import React from "react";
import { useFetch } from "../../hooks/useFetch";
import CastCard from "./CastCard";
// import imageNotAvailable from "../../imgs/image_not_available.png";

import "./allcast.css";
import { useParams } from "react-router-dom";

export default function AllCastt() {
  const { id } = useParams();
  const API_KEY = "9bc0659549309aef9ec3e87e06ce093e";
  const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;
  const { data, error, isPending } = useFetch(castUrl);
  const castArray = data?.cast || [];
  const crewArray = data?.crew || [];
  console.log("data", data);

  const extrector = (castRole) => {
    if (crewArray && crewArray.length > 0) {
      return crewArray.filter((castMember) => {
        return castMember.known_for_department === castRole;
      });
    }
    return [];
  };

  const production = extrector("Production");
  const crew = extrector("Crew");
  const directing = extrector("Directing");
  const sound = extrector("Sound");
  const writing = extrector("Writing");
  console.log("Writing", writing);
  return (
    <div className="container">
      <div className="cast-container">
        {error && <div>Error: {error.message}</div>}
        {isPending && <div>Loading...</div>}
        {data && (
          <div className="cast-grid">
            <div className="cast-column">
              <CastCard castArray={castArray} />
            </div>
            <div className="cast-column">
              <CastCard castArray={production} />
            </div>
            <div className="cast-column">
              <CastCard castArray={crew} />
            </div>
            <div className="cast-column">
              <CastCard castArray={directing} />
            </div>
            <div className="cast-column">
              <CastCard castArray={sound} />
            </div>
            <div className="cast-column">
              <CastCard castArray={writing} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
