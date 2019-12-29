import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import Boxes from "./components/pages/Boxes";

// import uuid from "uuid";

import "./App.css";

const generate = () => {
  let count = 0;
  const countUp = () => count++;

  return countUp;
};

const generateID = generate();

class App extends Component {
  state = {
    todos: [
      {
        id: generateID(),
        title: "Take out the trash",
        completed: false
      },
      {
        id: generateID(),
        title: "Dinner with wife",
        completed: false
      },
      {
        id: generateID(),
        title: "Meeting with boss",
        completed: false
      }
    ]
  };

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteItem = id => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  };

  addTodo = title => {
    this.setState({
      todos: [
        ...this.state.todos,
        { title, id: generateID(), completed: false }
      ]
    });
  };

  render() {
    // console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  deleteItem={this.deleteItem}
                  toggleComplete={this.toggleComplete}
                  todos={this.state.todos}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
          <Route path="/boxes" component={Boxes} />
        </div>
      </Router>
    );
  }
}

export default App;
