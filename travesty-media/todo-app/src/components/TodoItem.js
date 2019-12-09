import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      paddingLeft: "4px",
      marginRight: "auto"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <li style={itemStyle}>
        <input
          id={`todo${id}`}
          type="checkbox"
          onChange={this.props.toggleComplete.bind(this, id)}
        />
        <label htmlFor={`todo${id}`} style={this.getStyle()}>
          {title}
        </label>
        <button
          type="button"
          style={{ padding: "5px" }}
          onClick={this.props.deleteItem.bind(this, id)}
        >
          Delete
        </button>
      </li>
    );
  }
}

const itemStyle = {
  display: "flex",
  alignItems: "center",
  padding: "10px 20px 10px 10px",
  borderBottom: "1px #ccc dotted",
  backgroundColor: "#f4f4f4"
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem;
