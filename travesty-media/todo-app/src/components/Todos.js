import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return (
      <ol>
        {this.props.todos.map(todo => (
          <TodoItem
            toggleComplete={this.props.toggleComplete}
            deleteItem={this.props.deleteItem}
            key={todo.id}
            todo={todo}
          />
        ))}
      </ol>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
};

export default Todos;
