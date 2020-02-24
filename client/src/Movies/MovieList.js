import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const MovieList = props => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then(response => {
          console.log(response.data);
          setMovies(response.data);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieDetails {...props} key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

function MovieDetails(props) {
  const { id, title, director, metascore, stars } = props.movie;
  return (
    <div
      className="movie-card"
      onClick={() => props.history.push(`/movies/${id}`)}
    >
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
}

export default MovieList;
