import React from "react";
import { useParams } from "react-router-dom";

export default function constants() {
  const { id } = useParams();
  const API_KEY = "9bc0659549309aef9ec3e87e06ce093e";
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;
  const videosUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;
}
