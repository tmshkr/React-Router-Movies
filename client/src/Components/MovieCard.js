import React, { useState, useEffect } from "react";
import "./MovieCard.scss";

function MovieCard(props) {
  const { id, title, director, metascore, stars } = props.movie;
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(title);
  };

  return (
    <div
      className="movie-card"
      onClick={() => props.history.push(`/movies/${id}`)}
    >
      <h2>{title}</h2>
      {props.addToSavedList && (
        <button type="button" className="btn btn-primary" onClick={saveMovie}>
          Save
        </button>
      )}
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

export default MovieCard;
