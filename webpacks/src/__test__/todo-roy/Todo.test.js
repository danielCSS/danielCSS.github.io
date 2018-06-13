import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Todo from '../../../src/components/todo-roy/Todo';

describe('<Todo />', () => {
  const todoText = 'New Item';

  describe('unchecked(new) todo:', () => {
    let wrapped;
    let toggleCallback;
    let updateTodo;
    let deleteTodo;

    beforeEach(() => {
      toggleCallback = sinon.spy();
      updateTodo = sinon.spy();
      deleteTodo = sinon.spy();

      wrapped = shallow(
        <Todo
          id="someId"
          status="uncomplete"
          value={todoText}
          toggleTodo={toggleCallback}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />);
    });

    it('renders todo name in label', () => {
      expect(wrapped.find('label').text()).toEqual(todoText);
    });

    it('renders a destroy(delete) button', () => {
      expect(wrapped.find('button.destroy').length).toEqual(1);
    });

    it('renders uncomeplete todo without class ', () => {
      expect(wrapped.hasClass('editing')).toEqual(false);
      expect(wrapped.hasClass('completed')).toEqual(false);
    });

    it('has unchecked toggle checkbox for uncomplete todo', () => {
      expect(wrapped.find('input.toggle').prop('checked')).toEqual(false);
    });

    describe('Functionality', () => {
      it('Runs toggle callback when pressing the toggle checkbox', () => {
        wrapped.find('input.toggle').simulate('click');
        wrapped.update();
        expect(toggleCallback.calledOnce).toEqual(true);
        expect(toggleCallback.calledWith('someId')).toEqual(true);
      });

      it('Double click the label enters edit mode', () => {
        wrapped.find('label').simulate('dblclick');
        wrapped.update();

        expect(wrapped.find('input.toggle').length).toEqual(0);
        expect(wrapped.find('input.edit').length).toEqual(1);
        expect(wrapped.hasClass('editing')).toEqual(true);
      });

      it('Runs updateTodo when renaming todo and pressing Enter', () => {
        wrapped.find('label').simulate('dblclick');
        wrapped.update();

        wrapped.find('input.edit').simulate('change', {
          target: { value: 'New Todo' }
        });
        wrapped.update();

        expect(wrapped.find('input.edit').prop('value')).toEqual('New Todo');

        // Pressing enter:
        wrapped.find('input.edit').simulate('keypress', {
          type: 'keypress',
          key: 'Enter'
        });
        wrapped.update();

        expect(updateTodo.calledOnce).toEqual(true);
        expect(updateTodo.args[0][0]).toEqual({ id: 'someId', text:'New Todo' });
        expect(wrapped.find('input.toggle').length).toEqual(1);
        expect(wrapped.find('input.edit').length).toEqual(0);
        expect(wrapped.hasClass('editing')).toEqual(false);
      });

      it('Runs updateTodo when renaming todo and loose focus', () => {
        wrapped.find('label').simulate('dblclick');
        wrapped.update();

        wrapped.find('input.edit').simulate('change', {
          target: { value: 'New Todo' }
        });
        wrapped.update();

        expect(wrapped.find('input.edit').prop('value')).toEqual('New Todo');

        // Blur:
        wrapped.find('input.edit').simulate('blur', {
          type: 'blur'
        });
        wrapped.update();

        expect(updateTodo.calledOnce).toEqual(true);
        expect(updateTodo.args[0][0]).toEqual({ id: 'someId', text:'New Todo' });
        expect(wrapped.find('input.toggle').length).toEqual(1);
        expect(wrapped.find('input.edit').length).toEqual(0);
        expect(wrapped.hasClass('editing')).toEqual(false);
      });

      it('invoked delete function when pressing delete', () => {
        wrapped.find('button.destroy').simulate('click');
        wrapped.update();

        expect(deleteTodo.calledOnce).toEqual(true);
        expect(deleteTodo.calledWith('someId')).toEqual(true);
      });
    });
  });

  describe('completed todo:', () => {
    let wrapped;

    beforeEach(() => {
      wrapped = shallow(
        <Todo
          status="completed"
          value={todoText}
        />);
    });

    it('renders completed todo with "completed" class', () => {
      expect(wrapped.hasClass('editing')).toEqual(false);
      expect(wrapped.hasClass('completed')).toEqual(true);
    });

    it('has checked toggle checkbox for completed todo', () => {
      expect(wrapped.find('input.toggle').prop('checked')).toEqual(true);
    });
  });
});
