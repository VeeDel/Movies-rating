import { useState, useEffect, useRef } from "react";

export const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [ispending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const controllerRef = useRef(null);
  useEffect(() => {
    controllerRef.current = new AbortController();
    const fetchData = async () => {
      setIsPending(true);

      try {
        const response = await fetch(url, {
          ...options,
          signal: controllerRef.current.signal,
        });

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const jsonData = await response.json();
        setData(jsonData);
        setIsPending(false);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("The fetch was aborted");
        } else {
          setIsPending(false);
          setError("Could not fetch the data");
          console.error(err);
        }
      }
    };

    fetchData();

    return () => {
      controllerRef.current.abort();
    };
  }, [url]);

  return { data, ispending, error };
};
