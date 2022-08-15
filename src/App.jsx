import React from 'react';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import { Header } from './components/Header';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <GlobalStyles />
      <Outlet />
    </Provider>
  );
}

export default App;
