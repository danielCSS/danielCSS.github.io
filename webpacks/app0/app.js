import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.scss';

import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Recipes from 'components/recipes';
import AddRecipe from 'components/add-recipe';
import Total from 'components/total';

import { createStore } from 'redux';

const reducer = (state, action) => {
  console.log(`In reducer, got action: `, action);

  switch(action.type) {
    case 'TOGGLE':
      return;

    case 'ADD_RECIPE':

      return Object.assign({}, state);
  }

  return state;
};


const recipes = [
  {
    title: 'Waffles',
    favorite: false
  },
  {

    title: 'Omelette',
    favorite: true
  }
];

const store = createStore(reducer, { recipes });

window.store = store;

const App = () =>(
  <div>
    <h1>Recipes: <Total /></h1>
    <Recipes />
    <AddRecipe  />
    <Total />
  </div>
);

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
);
