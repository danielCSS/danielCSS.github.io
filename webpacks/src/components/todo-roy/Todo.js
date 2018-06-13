import React from 'react';
import classNames from 'classnames';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: '' };

    this.toggleTodo = this.toggleTodo.bind(this);
    this.enterEditMode = this.enterEditMode.bind(this);
    this.handleTodoChange = this.handleTodoChange.bind(this);
    this.handleUpdateTodo = this.handleUpdateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  toggleTodo() {
    this.props.toggleTodo && this.props.toggleTodo(this.props.id);
  }

  enterEditMode() {
    this.setState({ 
      status: 'editing',
      newValue: this.props.value
    });
  }

  handleTodoChange(event) {
    this.setState({ newValue: event.target.value });
  }

  handleUpdateTodo(event) {
    if (event.type === 'keypress' && event.key !== 'Enter') {
      return;
    }
    this.setState({ status: '' });
    this.props.updateTodo({id: this.props.id, text: this.state.newValue});
  }

  deleteTodo() {
    this.props.deleteTodo(this.props.id);
  }

  render() {
    const todoClass = classNames({
      completed: this.props.status === 'completed',
      editing: this.state.status === 'editing'
    });
    
    return (
      <li className={todoClass}>
        <div className="view">
          {this.state.status !== 'editing' && <input 
            className="toggle" 
            type="checkbox"
            checked={this.props.status === 'completed'}
            onClick={this.toggleTodo}
            
          />}
          <label onDoubleClick={this.enterEditMode} >
            {this.props.value}
          </label>
          <button 
            className="destroy"
            onClick={this.deleteTodo}>
          </button>
        </div>
        {this.state.status === 'editing' && <input 
          className="edit"
          autoFocus
          value={this.state.newValue}
          onChange={this.handleTodoChange}
          onBlur={this.handleUpdateTodo}
          onKeyPress={this.handleUpdateTodo}
        />}
      </li>   
    );
  }
}

export default Todo;