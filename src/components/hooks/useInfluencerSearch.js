import { useState, useEffect } from "react";
import axios from "axios";

const useInfluencerSearch = (keyword) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const YOUR_API_KEY = "1ccee50b15msh2c75810f0909085p1a5950jsn76718196178d";
  useEffect(() => {
    const fetchInfluencerSearch = async () => {
      setIsLoading(true);
      setError(null);

      const options = {
        method: "POST",
        url: "https://influencer-search.p.rapidapi.com/api/v1/influencer/search",
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key": { YOUR_API_KEY }, // Replace with your actual API key
          "X-RapidAPI-Host": "influencer-search.p.rapidapi.com",
        },
        data: {
          query: {
            keyword: keyword,
          },
        },
      };

      try {
        const response = await axios.request(options);
        setResults(response.data);
      } catch (error) {
        setError("Failed to fetch influencer search");
        console.error(error);
      }

      setIsLoading(false);
    };

    fetchInfluencerSearch();
  }, [keyword]);
  console.log("hello");

  return { results, isLoading, error };
};

export default useInfluencerSearch;
