import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

import Login from "./componentes/Login";
import Listado from "./componentes/Listado";
import Detalle from "./componentes/Detalle";
import Resultados from "./componentes/Resultados";
import Favourites from "./componentes/Favourites";

function App() {
  // functionality for favourite movies
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const favouriteMovies = localStorage.getItem("favs");

    if (favouriteMovies !== null) {
      setFavourites(JSON.parse(favouriteMovies));
    }
  }, [favourites]);

  const addOrRemoveFromFavs = (e) => {
    const btn = e.currentTarget;
    const parentElement = btn.parentElement;
    const favouriteMovies = localStorage.getItem("favs");
    let tempFavouriteMovies;

    if (favouriteMovies === null) {
      tempFavouriteMovies = [];
    } else {
      tempFavouriteMovies = JSON.parse(favouriteMovies);
    }

    const movieData = {
      poster_path: parentElement.querySelector("img").getAttribute("src"),
      release_date: parentElement.querySelector("#releaseDate").innerText,
      title: parentElement.querySelector("h3").innerText,
      overview: parentElement.querySelector("p").innerText,
      id: btn.dataset.movieId,
    };

    let movieIsInArray = tempFavouriteMovies.find((oneMovie) => {
      return oneMovie.id === movieData.id;
    });

    if (!movieIsInArray) {
      tempFavouriteMovies.push(movieData);
      localStorage.setItem("favs", JSON.stringify(tempFavouriteMovies));
      setFavourites(tempFavouriteMovies);

      console.log(
        "se agrego la pelicula",
        JSON.parse(localStorage.getItem("favs"))
      );
    } else {
      let moviesLeft = tempFavouriteMovies.filter((oneMovie) => {
        return oneMovie.id !== movieData.id;
      });
      tempFavouriteMovies.splice(0, tempFavouriteMovies.length, ...moviesLeft);

      localStorage.setItem("favs", JSON.stringify(tempFavouriteMovies));
      console.log(
        "se elimino una pelicula",
        JSON.parse(localStorage.getItem("favs"))
      );
    }
  };

  return (
    <div id="app" className="h-screen flex flex-col justify-between relative">
      <Header favourites={favourites} />
      <div className="flex-auto mb-auto px-5 pb-10 pt-40 md:pt-40  bg-slate-50">
        <Routes>
          <Route path="/" element={<Login />} end />
          <Route
            path="/listado"
            element={<Listado addOrRemoveFromFavs={addOrRemoveFromFavs} />}
          />
          <Route path="/detalle" element={<Detalle />} />
          <Route
            path="/resultados/:keyword"
            element={<Resultados addOrRemoveFromFavs={addOrRemoveFromFavs} />}
          />
          <Route
            path="/favourites"
            element={
              <Favourites
                favourites={favourites}
                addOrRemoveFromFavs={addOrRemoveFromFavs}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
