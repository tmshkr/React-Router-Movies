import React from "react";
import { useHistory, Link } from "react-router-dom";
import movies from "../data/movies";
import "./SavedList.scss";

function SavedList(props) {
  const history = useHistory();

  return (
    <div className="saved-list">
      <h3>Saved Movies</h3>
      <div className="home-button">
        <button
          onClick={() => history.push("/")}
          type="button"
          className="btn btn-secondary"
        >
          Home
        </button>
      </div>
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
