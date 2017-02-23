import './components/scss/main.scss';
import './core-scss/one.scss';
import './components/one';
import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';


// const root = document.querySelector('#app');
// root.innerHTML = `<p>Hello webpack 14.</p>`;



// const Header = (props) => {
//   return (
//     <h1>{props.title}</h1>
//   )
// }

const Header = (props) => (
  <h1>{props.title}</h1>
)

const App = () => {
   return (
  <div>
    <Header title="Hello"/> 
    <h2>There2</h2> 
  </div>
)};
//
render(
  <App />, document.getElementById('app')
);
