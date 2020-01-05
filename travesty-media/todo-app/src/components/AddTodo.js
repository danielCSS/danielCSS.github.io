import React, { Component } from "react";
import PropTypes from 'prop-types';

class AddTodo extends Component {
  state = {
    title: ""
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} style={formStyle}>
        <input
          style={{ flex: 1, marginRight: "1em", paddingLeft: "5px" }}
          type="text"
          name="title"
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <button style={{ padding: "5px" }} className="btn">
          Submit
        </button>
      </form>
    );
  }
}

const formStyle = {
  display: "flex",
  width: "calc(100% - 40px)",
  margin: "0 auto 1em"
};

AddTodo.propTypes = {
  addtodo: PropTypes.func.isRequired,
};

export default AddTodo;
