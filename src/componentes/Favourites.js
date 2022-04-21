import { Navigate } from "react-router-dom";

import MovieListCard from "./MovieListCard";

function Favourites({ addOrRemoveFromFavs, favourites }) {
  const token = localStorage.getItem("token");

  return (
    <section className="max-w-lg md:max-w-6xl mx-auto">
      {!token && <Navigate replace to="/" />}
      <h2 className="pb-5 text-xl text-slate-800">Favourite movies list</h2>
      {favourites.length !== 0 ? (
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
      ) : (
        <p>You haven't liked any movies yet!</p>
      )}
    </section>
  );
}

export default Favourites;
