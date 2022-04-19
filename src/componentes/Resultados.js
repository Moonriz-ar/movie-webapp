import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieListCard from "./MovieListCard";

function Resultados() {
  const { keyword } = useParams();
  const [resultMoviesList, setResultsMoviesList] = useState([]);

  useEffect(() => {
    try {
      fetch(
        `${process.env.REACT_APP_MOVIE_BASE_URL}search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1&query=${keyword}`
      )
        .then((response) => response.json())
        .then((data) => {
          setResultsMoviesList(data.results);
        });
    } catch (err) {}
  }, [keyword]);

  return (
    <section className="max-w-lg md:max-w-6xl mx-auto">
      <h2 className="pb-5 text-xl text-slate-800">Buscaste: {keyword}</h2>
      <section className="grid xs:grid-cols-1 md:grid-cols-4 gap-5">
        {resultMoviesList.length !== 0 ? (
          resultMoviesList.map((movie) => {
            return <MovieListCard movie={movie} key={movie.id} />;
          })
        ) : (
          <p>No se encontro ninguna peli... :(</p>
        )}
      </section>
    </section>
  );
}

export default Resultados;
