import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import App from './components/App/App';
import './index.css';
import { Global } from '@emotion/react';
import { globalStyles } from './components/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/rentNgo">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
    <Global styles={globalStyles} />
  </React.StrictMode>
);
