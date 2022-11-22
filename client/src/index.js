import React from 'react';
import ReactDOM from 'react-dom';
import Framework7 from 'framework7/lite-bundle';
import Framework7React from 'framework7-react';
import App from './App';

import 'framework7/css/bundle';
import './App.css';

Framework7.use(Framework7React);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

