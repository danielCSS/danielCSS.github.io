/////////////////////////////////////////////
///////// Version 1
/////////////////////////////////////////////
///<!-- <script>

const ce = React.createElement;
const MyTitle = function(props) {
  return ce(
    "div",
    null,
    ce("h1", { style: { color: props.color } }, props.title)
  );
};

const MyFirstComponent = function() {
  return React.createElement(
    "div",
    { id: "my-first-component" },
    ce(MyTitle, { title: "My title 1", color: "yellowGreen" }),
    ce(MyTitle, { title: "My title 1", color: "greenyellow" }),
    ce(MyTitle, { title: "My title 1", color: "salmon" }),
    ce(MyTitle, { title: "My title 1", color: "maroon" }),
    ce(MyTitle, { title: "My title 1", color: "aqua" })
  );
};

ReactDOM.render(
  React.createElement(MyFirstComponent),
  document.getElementById("app")
);
///</script> -->

/////////////////////////////////////////////
///////// Version 2
/////////////////////////////////////////////

const ce = React.createElement;
const MyTitle = function(props) {
  return ce(
    "div",
    null,
    ce("h1", { style: { color: props.color } }, props.title)
  );
};

const MyFirstComponent = function() {
  return ce(
    "div",
    { id: "my-first-component" },
    ce(MyTitle, { title: "My title 1", color: "yellowGreen" }),
    ce(MyTitle, { title: "My title 1", color: "greenyellow" }),
    ce(MyTitle, { title: "My title 1", color: "salmon" }),
    ce(MyTitle, { title: "My title 1", color: "maroon" }),
    ce(MyTitle, { title: "My title 1", color: "aqua" })
  );
};

ReactDOM.render(ce(MyFirstComponent), document.getElementById("app"));

/////////////////////////////////////////////
///////// Version 3
/////////////////////////////////////////////

import React from "react";
import { render } from "react-dom";

const MyTitle = function(props) {
  return <h1 style={{ color: props.color }}>{props.title}</h1>;
};

const MyFirstComponent = function() {
  return (
    <div id="my-first-component">
      <MyTitle title="My title 1" color="YellowGreen" />
      <MyTitle title="My title 2" color="greenyellow" />
      <MyTitle title="My title 3" color="salmon" />
      <MyTitle title="My title 4" color="maroon" />
      <MyTitle title="My title 5" color="aqua" />
    </div>
  );
};

render(<MyFirstComponent />, document.getElementById("app"));

/////////////////////////////////////////////
///////// Version 4
/////////////////////////////////////////////

import React from "react";
import { render } from "react-dom";

const App = () => (
  <div className="app">
    <div className="landing">
      <h1>svideo23</h1>
      <input type="text" placeholder="Search" />
      <a>or Browse All</a>
    </div>
  </div>
);

render(<App />, document.getElementById("app"));

/////////////////////////////////////////////
///////// Version 5
/////////////////////////////////////////////

import React, { Component } from "react";
import preload from "../data.json";
import ShowCard from "./ShowCard";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "Some default text"
    };
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }
  handleSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {preload.shows.map(show => (
            <ShowCard key={show.imdbID} show={show} />
          ))}
        </div>
      </div>
    );
  }
}

export default Search;

/////////////////////////////////////////////
///////// Version 6 - Transform Class Properties
/////////////////////////////////////////////

import React, { Component } from "react";
import preload from "../data.json";
import ShowCard from "./ShowCard";

class Search extends Component {
  state = {
    searchTerm: ""
  };
  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {preload.shows.map(show => (
            <ShowCard key={show.imdbID} show={show} />
          ))}
        </div>
      </div>
    );
  }
}

export default Search;

/////////////////////////////////////////////
///////// Version 7 - Filter Search
/////////////////////////////////////////////

import React, { Component } from "react";
import preload from "../data.json";
import ShowCard from "./ShowCard";

class Search extends Component {
  state = {
    searchTerm: ""
  };
  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };
  render() {
    return (
      <div className="search">
        <header>
          <h1>{this.state.searchTerm}</h1>
          <input
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {preload.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) !== -1
            )
            .map(show => <ShowCard key={show.imdbID} show={show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
