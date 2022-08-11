import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <Header />
      <GlobalStyles />
      <Outlet />
    </div>
  );
}

export default App;
