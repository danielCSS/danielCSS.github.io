import './components/scss/main.scss';
import './core-scss/one.scss';
import './components/one';

// if (module.hot) {
//   module.hot.accept()
// }

const root = document.querySelector('#root');
root.innerHTML = `<p>Hello webpack 14.</p>`;
