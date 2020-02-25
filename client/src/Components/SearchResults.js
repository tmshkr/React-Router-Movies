import React, { useEffect, useState } from "react";
import axios from "axios";
import { Alert } from "reactstrap";
import { useLocation } from "react-router-dom";
import MovieList from "./MovieList";
import Paginator from "./Paginator";
import key from "../config";
import "./SearchResults.scss";

function SearchResults(props) {
  const location = useLocation();
  const q = location.search.match(/q=([^&]*)/);

  const [searchResults, setSearchResults] = useState({});
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setPage] = useState(1);

  const handleSearch = str => {
    const url = `https://www.omdbapi.com/?s=${str}&page=${currentPage}&apikey=${key}`;
    axios.get(url).then(({ data }) => {
      console.log(data);
      const filtered = data.Search.filter(movie => movie.Poster !== "N/A");
      setTotalResults(data.totalResults);
      setSearchResults(filtered);
    });
  };

  useEffect(() => {
    console.log("useEffect fired", Date.now());
    if (q && q[1]) {
      // console.log(q[1]);
      handleSearch(q[1]);
    }
  }, [location, currentPage]);

  return (
    <div className="search-results">
      {totalResults > 0 ? (
        <>
          <MovieList movies={searchResults} />
          <Paginator
            handlePage={[currentPage, setPage]}
            totalResults={totalResults}
          />
        </>
      ) : (
        <Alert color="secondary">
          Search for a movie using the search bar and the results will appear
          here
        </Alert>
      )}
    </div>
  );
}

export default SearchResults;
