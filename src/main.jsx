import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Login from './pages/Login';
import Alunos from './pages/Alunos';
import Page404 from './pages/Page404';
import PrivateRoute from './routes/PrivateRoute';
import Register from './pages/Register';
import Fotos from './pages/Fotos';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Alunos />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/fotos" element={<Fotos />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
