import React from 'react';
import { shallow } from 'enzyme';

import App from '../../../src/containers/todo-roy/App';
import TodoInput from '../../../src/components/todo-roy/TodoInput';
import Todos from '../../../src/components/todo-roy/Todos';
import Footer from '../../../src/components/todo-roy/Footer';


describe('<App />', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = shallow(<App />);
  });

  it('renders <TodoInput />', () => {
    expect(wrapped.find(TodoInput).length).toEqual(1);
  });
  it('renders <Todos />', () => {
    expect(wrapped.find(Todos).length).toEqual(1);
  });
  it('renders <Footer />', () => {
    expect(wrapped.find(Footer).length).toEqual(1);
  });

  it('Initiate state with empty todos', () => {
    expect(wrapped.state('todos')).toEqual([]);
  });

  it('Add new todo', () => {
    wrapped.instance().addTodo('New Todo');
    wrapped.update();
    expect(wrapped.state('todos')[0]).toMatchObject({ id: expect.any(Number), value: 'New Todo', status: 'uncomplete' });
  });

  it('toggle todo', () => {
    wrapped.instance().addTodo('New Todo');
    wrapped.update();
    const id = wrapped.state('todos')[0].id;

    wrapped.instance().toggleTodo(id);
    wrapped.update();

    expect(wrapped.state('todos')[0]).toMatchObject({ id: expect.any(Number), value: 'New Todo', status: 'completed' });

    wrapped.instance().toggleTodo(id);
    wrapped.update();

    expect(wrapped.state('todos')[0]).toMatchObject({ id: expect.any(Number), value: 'New Todo', status: 'uncomplete' });
  });

  it('Rename todo', () => {
    wrapped.instance().addTodo('New Todo');
    wrapped.update();
    const id = wrapped.state('todos')[0].id;

    wrapped.instance().updateTodo({id, text: 'Renamed Todo'});
    expect(wrapped.state('todos')[0]).toMatchObject({ id: expect.any(Number), value: 'Renamed Todo', status: 'uncomplete' });
  });

  it('delete todo', () => {
    const dummy = [
      {id:1, value: 'Todo 1', status:'uncomplete'},
      {id:2, value: 'Todo 2', status:'uncomplete'},
      {id:3, value: 'Todo 3', status:'uncomplete'}

    ];
    const expected = [
      {id:1, value: 'Todo 1', status:'uncomplete'},
      {id:3, value: 'Todo 3', status:'uncomplete'}
    ];

    wrapped.setState({todos: dummy});
    wrapped.update();
    wrapped.instance().deleteTodo(2);
    wrapped.update();

    expect(wrapped.state('todos')).toEqual(expected);
  });
});
