// @flow

import React from "react";
import { Link } from "react-router-dom";

const Header = (props: {
  showSearch?: boolean,
  searchTerm?: string,
  handleSearchTermChange?: Function
}) => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input
        type="text"
        placeholder="Search"
        value={props.searchTerm}
        onChange={props.handleSearchTermChange}
      />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">Back</Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">svideo</Link>
      </h1>
      {utilSpace}
    </header>
  );
};
Header.defaultProps = {
  showSearch: false,
  handleSearchTermChange: function noop() {},
  searchTerm: ""
};
export default Header;
