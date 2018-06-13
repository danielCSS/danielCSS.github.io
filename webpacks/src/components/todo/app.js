import React from 'react'
import Footer from './footer'
import AddTodo from '../../containers/todo/addTodo'
import VisibleTodoList from '../../containers/todo/visibleTodoList'

const App = () => (
  <div>
    <h2>React-Redux Todo App&nbsp;
      <a href="https://redux.js.org/basics/example-todo-list">
        <small>(From Redux Doumentation)</small>
      </a>
    </h2>

    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
