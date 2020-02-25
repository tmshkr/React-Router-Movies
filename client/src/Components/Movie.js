import React from "react";
import axios from "axios";
import { useRouteMatch } from "react-router-dom";
import MovieCard from "./MovieCard";
import { Alert } from "reactstrap";

function Movie(props) {
  const match = useRouteMatch();
  const { movies } = props;
  console.log(match);
  let movie = movies[match.params.id];

  if (!movie) {
    return <Alert color="danger">Movie not found</Alert>;
  }

  return <MovieCard {...props} movie={movie} />;
}

export default Movie;
