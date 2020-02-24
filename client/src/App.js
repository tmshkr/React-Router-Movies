import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

function App() {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = title => {
    if (!savedList.includes(title)) {
      setSavedList([...savedList, title]);
    }
  };

  return (
    <Router>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:title"
        render={props => <Movie {...props} addToSavedList={addToSavedList} />}
      />
    </Router>
  );
}

export default App;
