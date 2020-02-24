import React, { useState, useEffect } from "react";
import "./MovieCard.scss";

function MovieCard(props) {
  const { imdbID, Title, Director, imdbRating, Actors, Poster } = props.movie;
  console.log(props);
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(Title);
  };

  return (
    <div
      className="movie-card"
      onClick={() => props.history.push(`/movies/${imdbID}`)}
    >
      <div>
        <h2>{Title}</h2>
        {props.addToSavedList && (
          <button type="button" className="btn btn-primary" onClick={saveMovie}>
            Save
          </button>
        )}
      </div>
      <div>
        <img src={Poster} />
        <div className="movie-info">
          <div className="movie-director">
            Director: <em>{Director}</em>
          </div>
          <div className="movie-metascore">
            imdbRating: <strong>{imdbRating}</strong>
          </div>
          <h3>Actors</h3>
          <p>{Actors}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
