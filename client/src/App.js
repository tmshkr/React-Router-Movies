import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import SavedList from "./components/SavedList";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import key from "./config";
import "./App.scss";

function App() {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = title => {
    if (!savedList.includes(title)) {
      setSavedList([...savedList, title]);
    }
  };

  useEffect(() => {
    const url = `https://www.omdbapi.com/?i=tt0076759&apikey=${key}`;
    axios.get(url).then(response => console.log(response));
  }, []);

  return (
    <Router>
      <SearchBar />
      <Tabs />
      <main className="main">
        <Switch>
          <Route
            path="/saved"
            render={props => <SavedList {...props} list={savedList} />}
          />
          <Route exact path="/movies" component={MovieList} />
          <Route
            path="/movies/:id"
            render={props => (
              <Movie {...props} addToSavedList={addToSavedList} />
            )}
          />
          <Redirect to="/movies" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
