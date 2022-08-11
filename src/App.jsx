import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Header } from './components/Header';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <Header />
      <GlobalStyles />
      <Outlet />
      <ToastContainer autoClose={3000} className="toast-container" />
    </div>
  );
}

export default App;
