function Card({ movie }) {
  return (
    <div className="bg-white rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
      <img
        className="h-56 lg:h-60 w-full object-cover"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={`${movie.original_title} poster`}
      />
      <div className="p-3">
        <span className="text-sm text-primary">{movie.release_date}</span>
        <h3 className="font-semibold text-xl leading-6 text-gray-700 my-2">
          {movie.title}
        </h3>
        <p className="paragraph-normal text-gray-600">
          {`${movie.overview.substring(0, 150)}...`}
        </p>
        <a className="mt-3 block" href="/">
          See details
        </a>
      </div>
    </div>
  );
}

export default Card;
