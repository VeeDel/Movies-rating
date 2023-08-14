import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import "@fortawesome/fontawesome-free/css/all.min.css";
import imageNotAvailable from "../../imgs/image_not_available.png";
// import ReactTooltip from "react-tooltip";

import styles from "./personleft.module.css";

export default function PersonLeft({ id }) {
  const API_KEY = "9bc0659549309aef9ec3e87e06ce093e";
  const [person, setPerson] = useState(null);

  const { data, error, loading } = useFetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}`
  );

  useEffect(() => {
    if (data) {
      setPerson(data);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const birthdate = new Date(data?.birthday);
  const currentDate = new Date();
  const ageInMillis = currentDate - birthdate;
  const ageInYears = Math.floor(ageInMillis / (1000 * 60 * 60 * 24 * 365.25)); // Approximate calculation

  return (
    <div>
      {person && (
        <div className={styles.person}>
          <img
            src={
              person.profile_path
                ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                : imageNotAvailable
            }
            alt="Image"
            className={styles["person-img-top"]}
          />
          <div className={styles["person-body"]}>
            <div className={styles["social-icon"]}>
              <a href="#" className={styles["social-icon"]}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className={styles["social-icon"]}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className={styles["social-icon"]}>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className={styles["social-icon"]}>
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" className={styles["social-icon"]}>
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className={styles[("social-icon", "web-link")]}>
                <i className="fa-solid fa-link"></i>{" "}
              </a>
            </div>
            <div className={styles["person-details"]}>
              <h4> Personal info</h4>
              <h6 className={styles["details-h6"]}>Known For</h6>
              <p className={styles["details"]}>{data.known_for_department}</p>

              <h6 className={styles["details-h6"]}>Known Credits</h6>
              <p className={styles["details"]}>46</p>

              <h6 className={styles["details-h6"]}>Gender</h6>
              <p className={styles["details"]}>
                {data.gender === 1 ? "Female" : "Male"}
              </p>

              <h6 className={styles["details-h6"]}>Birthday</h6>
              <p className={styles["details"]}>
                {data.birthday} ({ageInYears} Years Old)
              </p>

              <h6 className={styles["details-h6"]}>Place of Birth</h6>
              <p className={styles["details"]}>{data.place_of_birth}</p>

              <h6 className={styles["details-h6"]}>Also Known As</h6>
              {data.also_known_as.map((known, index) => (
                <p key={index} className={styles["details"]}>
                  {known}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
