import React from 'react';
import { Route, Routes } from 'react-router-dom';

import App from '../App';
import Login from '../pages/Login';
import Aluno from '../pages/Aluno';
import Alunos from '../pages/Alunos';
import Page404 from '../pages/Page404';
import PrivateRoute from './PrivateRoute';
import Register from '../pages/Register';
import Fotos from '../pages/Fotos';

export default function baseRoutes() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Alunos />} />
          <Route path="/aluno/" element={<Aluno />} />
          <Route path="/aluno/:id/edit" element={<Aluno />} />
          <Route path="/fotos/:id" element={<Fotos />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}
