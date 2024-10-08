import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import './index.css'; // Ваш загальний CSS
import { Global } from '@emotion/react';
import { globalStyles } from './components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/rentNgo">
      <Global styles={globalStyles} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);