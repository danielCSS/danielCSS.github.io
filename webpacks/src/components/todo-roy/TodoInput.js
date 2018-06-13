import React from 'react';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value:'' };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleKeyPress(event) {
    if (event.key !== 'Enter') {
      return;
    }
    
    this.props.addTodo(this.state.value);

    // clear input field
    this.setState({ value : '' });
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input 
          className="new-todo" 
          placeholder="What needs to be done?" 
          autoFocus
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </header>      
    );
  }
}

export default TodoInput;
