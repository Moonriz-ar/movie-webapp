import { Link } from "react-router-dom";

function MovieListCard({ movie }) {
  return (
    <div className="bg-white border-gray-100 rounded-lg border shadow md:max-w-none overflow-hidden flex flex-col">
      <img
        className="h-56 lg:h-60 w-full object-cover"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={`${movie.original_title} poster`}
      />
      <div className="p-3">
        <span className="text-sm text-gray-400">{movie.release_date}</span>
        <h3 className="font-bold text-2xl my-2">{movie.title}</h3>
        <p className="paragraph-normal text-gray-400">
          {`${movie.overview.substring(0, 150)}...`}
        </p>
      </div>
      <div className="bg-rose-700 text-rose-50 py-2 px-4 rounded-lg mt-auto mx-auto mb-4">
        <Link className="p-2" to={`/detalle?movieID=${movie.id}`}>
          View details
        </Link>
      </div>
    </div>
  );
}

export default MovieListCard;
