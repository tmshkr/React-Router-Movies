import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import SavedList from "./components/SavedList";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import "./App.scss";

function App() {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = title => {
    if (!savedList.includes(title)) {
      setSavedList([...savedList, title]);
    }
  };

  return (
    <Router>
      <SearchBar />
      <Tabs />
      <main className="main">
        <Route exact path="/" component={MovieList} />
        <Route
          path="/saved"
          render={props => <SavedList {...props} list={savedList} />}
        />
        <Route
          path="/movies/:id"
          render={props => <Movie {...props} addToSavedList={addToSavedList} />}
        />
      </main>
    </Router>
  );
}

export default App;
