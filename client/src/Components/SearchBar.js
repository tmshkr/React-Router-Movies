import React from "react";
import { Link } from "react-router-dom";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import "./SearchBar.scss";

function SearchBar() {
  return (
    <header id="searchbar">
      <nav>
        <Link to="/">
          <h1 className="title">OMDb Explorer</h1>
        </Link>
        <InputGroup>
          <Input />
          <InputGroupAddon addonType="append">
            <Button color="info">Search</Button>
          </InputGroupAddon>
        </InputGroup>
      </nav>
    </header>
  );
}

export default SearchBar;
