import React from "react";
import { Link } from "react-router-dom";
import "./SavedList.scss";

function SavedList(props) {
  const { movies, savedList } = props;
  return (
    <div className="saved-list">
      <h3>Saved Movies</h3>
      <ul>
        {savedList.map(imdbID => (
          <li key={imdbID} className="saved-movie">
            <Link to={`/movies/${imdbID}`}>{movies[imdbID].Title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SavedList;
