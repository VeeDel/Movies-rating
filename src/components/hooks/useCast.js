import { useEffect, useRef, useState } from "react";

export const useCast = (id, API_KEY, options) => {
  const [cast, setCast] = useState(null);
  const [pending, setPending] = useState(false);
  const [err, setErr] = useState(null);
  const controllerRef = useRef(null);

  useEffect(() => {
    controllerRef.current = new AbortController();
    const fetchData = async () => {
      setPending(true);

      try {
        const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;
        const response = await fetch(url, {
          ...options,
          signal: controllerRef.current.signal,
        });

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const jsonData = await response.json();
        setCast(jsonData);
        setPending(false);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("The fetch was aborted");
        } else {
          setPending(false);
          setErr("Could not fetch the data");
          console.error(err);
        }
      }
    };

    fetchData();

    return () => {
      controllerRef.current.abort();
    };
  }, [id]);
  console.log(cast);
  return { cast, pending, err };
};
