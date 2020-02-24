import React from "react";
import "./MoviePoster.scss";

function MoviePoster(props) {
  const { imdbID, Title, Poster } = props.movie;
  return (
    <div
      className="movie-poster"
      onClick={() => props.history.push(`/movies/${imdbID}`)}
    >
      <h3>{Title}</h3>
      <img src={Poster} />
    </div>
  );
}

export default MoviePoster;
