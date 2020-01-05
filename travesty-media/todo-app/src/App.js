import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import Boxes from "./components/pages/Boxes";

// import uuid from "uuid";

import "./App.css";

// const generate = () => {
//   let count = 0;
//   const countUp = () => count++;

//   return countUp;
// };

// const generateID = generate();

const url = 'https://jsonplaceholder.typicode.com/todos';

class App extends Component {
  state = {
    todos: []
    // todos: [
    //   {
    //     id: generateID(),
    //     title: "Take out the trash",
    //     completed: false
    //   },
    //   {
    //     id: generateID(),
    //     title: "Dinner with wife",
    //     completed: false
    //   },
    //   {
    //     id: generateID(),
    //     title: "Meeting with boss",
    //     completed: false
    //   }
    // ]
  };

  componentDidMount() {
    fetch(`${url}?_limit=10`)
    .then((response) => { return response.json(); })
    .then(res => this.setState({ todos: res }))
  }

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
    // this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
    fetch(`${url}/${id}`, {method: 'DELETE'})
    .then(res => this.setState({ todos: this.state.todos.filter(todo => todo.id !== id)}))
  };

  addTodo = title => {
    // Example POST method implementation:
    // async function postData(url = '', data = {}) {
    //   // Default options are marked with *
    //   const response = await fetch(url, {
    //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //     // mode: 'cors', // no-cors, *cors, same-origin
    //     // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //     // credentials: 'same-origin', // include, *same-origin, omit
    //     headers: {
    //       'Content-Type': 'application/json'
    //       // 'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     // redirect: 'follow', // manual, *follow, error
    //     // referrerPolicy: 'no-referrer', // no-referrer, *client
    //     body: JSON.stringify(data) // body data type must match "Content-Type" header
    //   });
    //   return await response.json(); // parses JSON response into native JavaScript objects
    // }

    // postData(url, { title, completed: false })
    //   .then((data) => {
    //     this.setState({todos: [...this.state.todos, data]}) // JSON data parsed by `response.json()` call
    //   });

    fetch(url, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({title, completed: false})})
    .then((response) => { return response.json(); })
    .then(data => this.setState({todos: [...this.state.todos, data]}))
    // this.setState({
    //   todos: [
    //     ...this.state.todos,
    //     { title, id: generateID(), completed: false }
    //   ]
    // });
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
