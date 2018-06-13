// import '../../components/scss/todo-roy/app.scss';

import React from 'react';

import TodoInput from '../../components/todo-roy/TodoInput';
import Todos from '../../components/todo-roy/Todos';
import Footer from '../../components/todo-roy/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos:[]
    };

    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(text) {
    if (text === '') {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      value:text,
      status: 'uncomplete'
    };

    this.setState({
      todos: [
        ...this.state.todos,
        newTodo
      ]
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (id !== todo.id) {
          return todo;
        }

        const status = (todo.status === 'uncomplete')
          ? 'completed'
          : 'uncomplete';

        return {
          ...todo,
          status
        };
      })
    });
  }

  updateTodo({ id, text }) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (id !== todo.id) {
          return todo;
        }

        return {
          ...todo,
          value: text
        };
      })
    });
  }

  deleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return (id !== todo.id);
      })
    });
  }

  render() {
    return (
      <div className="roy-todo">
        <section className="todoapp">
          <h2>React Todo - Roy's version</h2>
          <TodoInput
            addTodo={this.addTodo}
          />
          <Todos
            todos={this.state.todos}
            toggleTodo={this.toggleTodo}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer />
        </section>
      </div>
    );
  }
}

export default App;
