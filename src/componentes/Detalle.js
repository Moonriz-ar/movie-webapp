import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import MovieDetailCard from "./MovieDetailCard";

function Detalle() {
  const token = localStorage.getItem("token");

  const [movie, setMovie] = useState(null);

  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieID");

  useEffect(() => {
    try {
      fetch(
        `${process.env.REACT_APP_MOVIE_BASE_URL}/movie/${movieID}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US`
      )
        .then((response) => response.json())
        .then((data) => setMovie(data));
    } catch (err) {
      console.log(err);
    }
  }, [movieID]);

  return (
    <>
      {!token && <Navigate replace to="/" />}
      {!movie && <p>Cargando...</p>}
      {movie && <MovieDetailCard movie={movie} />}
    </>
  );
}

export default Detalle;
