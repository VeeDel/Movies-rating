import React, { useEffect, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import "./bio.css";
export default function Bio({ id }) {
  // const id = "109513";
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
  if (data)
    return (
      <div className="bio">
        <h1>{data.name}</h1>
        <h2>Biography</h2>
        <p>{data.biography}</p>
      </div>
    );
}
