import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SavedList from "./components/SavedList";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";

function App() {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = title => {
    if (!savedList.includes(title)) {
      setSavedList([...savedList, title]);
    }
  };

  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={MovieList} />
      <SavedList path="/saved" list={savedList} />
      <Route
        path="/movies/:id"
        render={props => <Movie {...props} addToSavedList={addToSavedList} />}
      />
    </Router>
  );
}

export default App;
