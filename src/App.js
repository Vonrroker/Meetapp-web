import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import { ToastContainer } from 'react-toastify';
import history from './services/history';
import Routes from './Routes';

import store from './store';

import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <ToastContainer />
        <GlobalStyles />
      </Router>
    </Provider>
  );
}

export default App;
