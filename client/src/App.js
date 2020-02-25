import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Tabs from "./components/Tabs";
import SavedList from "./components/SavedList";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import staticData from "./data/movies";
import key from "./config";
import "./App.scss";

const movieList = [
  "tt0068646",
  "tt0076759",
  "tt0120737",
  "tt0103064",
  "tt0082971",
  "tt0108358",
  "tt0062622",
  "tt0107048",
  "tt0071853"
];

function App() {
  const [savedList, setSavedList] = useState([]);
  const [movies, setMovies] = useState(staticData);

  const addToSavedList = id => {
    if (!savedList.includes(id)) {
      setSavedList([...savedList, id]);
    }
  };

  const deleteFromSavedList = id => {
    const filtered = [...savedList].filter(el => el !== id);
    setSavedList(filtered);
  };

  // useEffect(() => {
  //   const movies = {};
  //   movieList.forEach(id => {
  //     const url = `https://www.omdbapi.com/?i=${id}&apikey=${key}`;
  //     axios.get(url).then(({ data }) => {
  //       movies[data.imdbID] = data;
  //       if (Object.keys(movies).length === movieList.length) {
  //         setMovies(movies);
  //       }
  //     });
  //   });
  // }, []);

  return (
    <Router>
      <SearchBar />
      <main className="main">
        <Tabs />
        <Switch>
          <Route
            path="/saved"
            render={props => (
              <SavedList {...props} movies={movies} savedList={savedList} />
            )}
          />
          <Route
            exact
            path="/search"
            render={props => <SearchResults {...props} movies={movies} />}
          />
          <Route
            path="/search?:query"
            render={props => <SearchResults {...props} movies={movies} />}
          />
          <Route
            exact
            path="/movies"
            render={props => <MovieList {...props} movies={movies} />}
          />
          <Route
            path="/movies/:id"
            render={props => (
              <Movie
                {...props}
                movies={movies}
                handleList={[savedList, addToSavedList, deleteFromSavedList]}
              />
            )}
          />
          <Redirect to="/movies" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
