import React from "react";
import imageNotAvailable from "../../imgs/image_not_available.png";

export default function CastCard({ castArray = [] }) {
  return (
    <>
      {castArray.length > 0 && (
        <div className="headline">
          {castArray[0].known_for_department} {castArray.length}
        </div>
      )}
      {castArray.map((castMember, index) => (
        <div className="cast-list" key={index}>
          <a href={`/person/${castMember.id}`}>
            <div className="card-flex">
              <div className="card-image">
                <img
                  src={
                    castMember?.profile_path
                      ? `https://image.tmdb.org/t/p/w500${castMember.profile_path}`
                      : imageNotAvailable
                  }
                  alt={castMember.name}
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">{castMember?.name}</h3>
                <p className="card-description">{castMember?.character}</p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
}
