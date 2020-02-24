import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

function Movie(props) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const id = props.match.params.id;

    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return <MovieCard {...props} movie={movie} />;
}

export default Movie;
