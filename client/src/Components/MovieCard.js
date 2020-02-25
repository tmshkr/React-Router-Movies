import React from "react";
import { Card } from "reactstrap";
import "./MovieCard.scss";

function MovieCard(props) {
  const {
    imdbID,
    Title,
    Director,
    imdbRating,
    Actors,
    Poster,
    Plot
  } = props.movie;

  return (
    <div className="movie-card">
      <div>
        <h3>{Title}</h3>
      </div>
      <div>
        <div className="img-wrapper">
          <img src={Poster} alt={Title} />
        </div>
        <div className="movie-info">
          <div className="movie-director">
            Director: <em>{Director}</em>
          </div>
          <div className="movie-metascore">
            imdbRating: <strong>{imdbRating}</strong>
          </div>
          <h4>Actors</h4>
          <p>{Actors}</p>
          <h4>Plot</h4>
          <p>{Plot}</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => props.addToSavedList(imdbID)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
