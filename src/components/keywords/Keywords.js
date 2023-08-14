import React, { useEffect, useState } from "react";

const MovieKeywords = ({ id }) => {
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    const fetchKeywords = async () => {
      try {
        const API_KEY = "9bc0659549309aef9ec3e87e06ce093e";
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/keywords?api_key=${API_KEY}`
        );
        const data = await response.json();
        setKeywords(data.keywords);
      } catch (error) {
        console.log("Error fetching keywords:", error);
      }
    };

    fetchKeywords();
  }, [id]);

  return (
    <div>
      <div className="keywords-container">
        <h3>Keywords</h3>
        <ul>
          {keywords.map((keyword) => (
            <li className="keyword" key={keyword.id}>
              {keyword.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieKeywords;
