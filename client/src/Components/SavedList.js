import React from "react";
import { useHistory } from "react-router-dom";
import "./SavedList.scss";

function SavedList(props) {
  const history = useHistory();

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
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
        {props.list.map(title => (
          <li key={title} className="saved-movie">
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SavedList;
