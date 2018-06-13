import React from 'react';
import Todo from './Todo';

const Todos = (props) => {
  return (
    <section className="main">
      <input 
        className="toggle-all" 
        id="toggle-all" 
        type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">

        {props.todos.map((todo) => {
          return (
            <Todo 
              key={todo.id}
              id={todo.id}
              status={todo.status} 
              value={todo.value}
              toggleTodo={props.toggleTodo}
              updateTodo={props.updateTodo}
              deleteTodo={props.deleteTodo}
            />        
          );
        })}  
      
      </ul>
    </section>    
  );
};

export default Todos;