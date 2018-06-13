import React from 'react';
import { shallow } from 'enzyme';

import Todos from '../../../src/components/todo-roy/Todos';

describe('<Todos />', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = shallow(<Todos todos={[]}/>);
  });

  it('render a toggle all checkox', () => {
    expect(wrapped.find('input.toggle-all[type="checkbox"]').length).toEqual(1);
  });

  it('render a <ul>', () => {
    expect(wrapped.find('ul.todo-list').length).toEqual(1);
  });
});
