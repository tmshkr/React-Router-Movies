import React from "react";
import { useHistory, Link } from "react-router-dom";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./NavBar.scss";

function NavBar(props) {
  const history = useHistory();
  return (
    <header id="navbar">
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

export default NavBar;
