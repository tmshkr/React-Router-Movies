import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import movies from "../data/movies";

function Movie(props) {
  const movie = movies[props.match.params.id];

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return <MovieCard {...props} movie={movie} />;
}

export default Movie;
