import React from "react";
import MovieCard from "./MovieCard";
import { Alert } from "reactstrap";

function Movie(props) {
  const { movies } = props;
  const movie = movies[props.match.params.id];

  if (!movie) {
    return <Alert color="danger">Movie not found</Alert>;
  }

  return <MovieCard {...props} movie={movie} />;
}

export default Movie;
