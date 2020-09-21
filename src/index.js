import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {TicketsProvider} from './stores/TicketsContext'

ReactDOM.render(
  <BrowserRouter>
    <TicketsProvider>
      <App />
    </TicketsProvider>
  </BrowserRouter>,
  document.getElementById('root')
);