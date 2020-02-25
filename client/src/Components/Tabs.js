import React from "react";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import "./Tabs.scss";

function Tabs(props) {
  const location = useLocation();
  return (
    <nav className="tabs">
      <Link
        to="/"
        className={classNames({ active: location.pathname !== "/saved" })}
      >
        Browse
      </Link>
      <Link
        to="/saved"
        className={classNames({ active: location.pathname === "/saved" })}
      >
        Saved
      </Link>
    </nav>
  );
}

export default Tabs;
