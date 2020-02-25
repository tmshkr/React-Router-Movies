import React from "react";
import MoviePoster from "./MoviePoster";
import "./MovieList.scss";

function MovieList(props) {
  const { movies } = props;
  return (
    <div className="movie-list">
      {Object.entries(movies).map(([id, movie]) => (
        <MoviePoster {...props} key={id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
