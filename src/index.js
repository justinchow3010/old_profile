import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import App from './App';
import Loader from './components/loader'

ReactDOM.render(
  <React.StrictMode>
    <Loader/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);