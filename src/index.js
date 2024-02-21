import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import './index.css';
import { Global } from '@emotion/react';
import { globalStyles } from './components/GlobalStyle';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/rentNgo">
        <App />
      </BrowserRouter>
    </Provider>
    <Global styles={globalStyles} />
  </React.StrictMode>
);
