import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

import key from "../config";
import "./SearchBar.scss";

function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  const handleSearch = str => {
    const url = `https://www.omdbapi.com/?s=${str}&apikey=${key}`;
    axios.get(url).then(({ data }) => {
      console.log(data);
      // movies[data.imdbID] = data;
      // setMovies(movies);
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // handleSearch(searchText);
    history.push(`/search?${searchText}`);
  };

  return (
    <header id="searchbar">
      <nav>
        <Link to="/">
          <h1 className="title">OMDb Explorer</h1>
        </Link>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
            <InputGroupAddon addonType="append">
              <Button color="info">Search</Button>
            </InputGroupAddon>
          </InputGroup>
        </form>
      </nav>
    </header>
  );
}

export default SearchBar;
