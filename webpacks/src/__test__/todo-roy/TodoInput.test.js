import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import TodoInput from '../../../src/components/todo-roy/TodoInput';

describe('<TodoInput />', () => {
  let wrapped;
  let addTodoCallback;

  beforeEach(() => {
    addTodoCallback = sinon.spy();
    wrapped = shallow(
      <TodoInput
        addTodo={addTodoCallback}
      />);
  });

  it('has 1 input tag', () => {
    expect(wrapped.find('input').length).toEqual(1);
  });

  it('has placeholder in its input', () => {
    expect(wrapped.find('input').prop('placeholder')).toBeDefined();
  });

  it('has a class of "new-todo"', () => {
    expect(wrapped.find('input').hasClass('new-todo')).toEqual(true);
  });

  it('is possible to write text in the input box', () => {
    wrapped.find('input').simulate('change', {
      target: {value: 'New Todo'}
    });
    wrapped.update();

    expect(wrapped.find('input').prop('value')).toEqual('New Todo');
  });

  it('clear the input when pressing Enter', () => {
    wrapped.find('input').simulate('change', {
      target: {value: 'New Todo'}
    });
    wrapped.update();

    wrapped.find('input').simulate('keypress', {
      type: 'keypress',
      key: 'Enter'
    });
    wrapped.update();

    expect(wrapped.find('input').prop('value')).toEqual('');
  });

  it('invoke addTodo callback with new todo text as fn param', () => {
    wrapped.find('input').simulate('change', {
      target: {value: 'New Todo'}
    });
    wrapped.update();

    wrapped.find('input').simulate('keypress', {
      type: 'keypress',
      key: 'Enter'
    });
    wrapped.update();

    expect(addTodoCallback.calledWith('New Todo')).toEqual(true);
  });
});
