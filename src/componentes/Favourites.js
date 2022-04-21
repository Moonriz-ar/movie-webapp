import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import MovieListCard from "./MovieListCard";

function Favourites({ addOrRemoveFromFavs }) {
  const token = localStorage.getItem("token");
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const favouriteMovies = JSON.parse(localStorage.getItem("favs"));

    if (favouriteMovies !== null) {
      setFavourites(favouriteMovies);
    }
  }, []);

  return (
    <section className="max-w-lg md:max-w-6xl mx-auto">
      {!token && <Navigate replace to="/" />}
      <h2 className="pb-5 text-xl text-slate-800">Favourite movies list</h2>
      {favourites.length !== 0 && (
        <section className="grid xs:grid-cols-1 md:grid-cols-4 gap-5">
          {favourites.map((movie) => {
            return (
              <MovieListCard
                movie={movie}
                key={movie.id}
                addOrRemoveFromFavs={addOrRemoveFromFavs}
              />
            );
          })}
        </section>
      )}
    </section>
  );
}

export default Favourites;
