import React from 'react'
import Footer from './footer'
import AddTodo from '../../containers/todo/addTodo'
import VisibleTodoList from '../../containers/todo/visibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
