import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { ShoppingCartContextWrapper } from './contexts';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <ShoppingCartContextWrapper>
      <App />
    </ShoppingCartContextWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
