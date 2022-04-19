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
    <section className="max-w-lg md:max-w-6xl mx-auto">
      {!token && <Navigate replace to="/" />}
      <h2 className="pb-5 text-xl text-slate-800">Movies list</h2>
      <section className="grid xs:grid-cols-1 md:grid-cols-4 gap-5">
        {moviesList.map((movie) => {
          return <MovieListCard movie={movie} key={movie.id} />;
        })}
      </section>
    </section>
  );
}

export default Listado;
