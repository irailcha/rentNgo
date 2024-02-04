import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './index.css';
import { Global } from '@emotion/react';
import { globalStyles } from './components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Global styles={globalStyles} />
  </React.StrictMode>
);
