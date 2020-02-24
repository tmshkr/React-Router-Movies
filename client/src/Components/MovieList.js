import React from "react";
import MoviePoster from "./MoviePoster";
import movies from "../data/movies";
import "./MovieList.scss";

function MovieList(props) {
  return (
    <div className="movie-list">
      {Object.entries(movies).map(([id, movie]) => (
        <MoviePoster {...props} key={id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
