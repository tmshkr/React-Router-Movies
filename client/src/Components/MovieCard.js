import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";
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

  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(imdbID);
  };

  return (
    <Card className="movie-card">
      <div>
        <h3>{Title}</h3>
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
          <h4>Actors</h4>
          <p>{Actors}</p>
          <h4>Plot</h4>
          <p>{Plot}</p>
          {props.addToSavedList && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={saveMovie}
            >
              Save
            </button>
          )}
        </div>
      </div>
    </Card>
  );
}

export default MovieCard;
