import React from "react";
import { Link } from "react-router-dom";
import movies from "../data/movies";
import "./SavedList.scss";

function SavedList(props) {
  return (
    <div className="saved-list">
      <h3>Saved Movies</h3>
      <ul>
        {props.list.map(imdbID => (
          <li key={imdbID} className="saved-movie">
            <Link to={`/movies/${imdbID}`}>{movies[imdbID].Title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SavedList;
