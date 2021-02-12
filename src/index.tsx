import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Form from './components/Form';

const App = ():JSX.Element => (
  <Form/>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);