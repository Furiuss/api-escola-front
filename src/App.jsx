import React from 'react';
import { Header } from './components/Header';
import { Login } from './pages/Login';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <div>
      <Header />
      <Login />
      <GlobalStyle />
    </div>
  );
}

export default App;
