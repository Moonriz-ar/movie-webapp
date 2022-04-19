import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import MovieListCard from "./MovieListCard";

function Listado() {
  const token = localStorage.getItem("token");

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    try {
      fetch(
        `${process.env.REACT_APP_MOVIE_BASE_URL}discover/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const apiData = data.results;
          setMoviesList(apiData);
        });
    } catch (err) {
      console.log(err);
    }
  }, [setMoviesList]);

  return (
    <>
      {!token && <Navigate replace to="/" />}
      <h2>Este es el componente de listado</h2>
      <section className="grid grid-cols-4 gap-4">
        {moviesList.map((movie) => {
          return <MovieListCard movie={movie} key={movie.id} />;
        })}
      </section>
    </>
  );
}

export default Listado;
