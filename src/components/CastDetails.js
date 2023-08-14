import React from "react";
import "./castDetails.css";
import rightArrow from "./imgs/rightArrow.svg";
import imageNotAvailable from "../components/imgs/image_not_available.png";
import { Link, useParams } from "react-router-dom";
export default function CastDetails({ cast, data }) {
  const castToShow = cast.slice(0, 10);
  const { id } = useParams();
  console.log(data);

  return (
    <>
      <h2
        style={{
          color: "black",
          marginTop: "2rem",
        }}
      >
        Casts
      </h2>
      <div class="main-div">
        {" "}
        <div class="cards-container">
          {castToShow &&
            castToShow.map((castm) => {
              return (
                <div class="cast">
                  <img
                    src={
                      castm.profile_path
                        ? `https://image.tmdb.org/t/p/w500${castm.profile_path}`
                        : imageNotAvailable
                    }
                    class="card-img-top"
                    alt="..."
                  />

                  <div className="cast-details">
                    <a href={`/person/${castm.id}`}>
                      <h5>{castm.name}</h5>
                    </a>
                    <p>{castm.character}</p>
                  </div>
                </div>
              );
            })}
          <Link className="viewMore" to={`/movie/${id}/allCasts`}>
            View More
            <img src={rightArrow} alt="Right Arrow" className="right-arrow" />
          </Link>
        </div>
      </div>
    </>
  );
}
