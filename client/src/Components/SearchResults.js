import React from "react";
import { Alert } from "reactstrap";
import "./SearchResults.scss";

function SearchResults(props) {
  return (
    <div className="search-results">
      <Alert color="secondary">
        Search for a movie using the search bar and the results will appear here
      </Alert>
    </div>
  );
}

export default SearchResults;
