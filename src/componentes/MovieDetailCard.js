function MovieDetailCard({ movie }) {
  return (
    <div className="py-3 my-5 sm:max-w-3xl sm:mx-auto">
      <div className="bg-white shadow-lg border-gray-100 border sm:rounded-3xl p-5 flex mx-3 flex-col md:flex-row relative">
        <div className="w-auto md:w-1/2 -mt-16">
          <img
            className="rounded-3xl shadow-lg"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt=""
          />
        </div>
        <div className="flex flex-col md:w-1/2 space-y-4 pt-5 md: pl-5">
          <div className="flex justify-between items-start">
            <h2 className="text-3xl font-bold">{movie.title}</h2>
          </div>
          <div>
            <div className="text-sm text-gray-400">Movie</div>
            <div className="text-lg text-gray-800">
              {movie.release_date && movie.release_date.substring(0, 4)}
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-400">Rating</div>
            <div className="text-lg text-gray-800">{movie.vote_average}</div>
          </div>
          <div>
            <div className="text-sm text-gray-400">Genres</div>
            {movie.genres &&
              movie.genres.map((genre) => {
                return (
                  <p className="text-gray-800" key={genre.id}>
                    {genre.name}
                  </p>
                );
              })}
          </div>
          <p className=" text-gray-400 overflow-y-hidden">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailCard;
