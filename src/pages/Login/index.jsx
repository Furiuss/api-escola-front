import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { clicar } from '../../features/click/clicarSlice';
import { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

export default function Login() {
  const dispatch = useDispatch();
  const clicado = useSelector((state) => state.clicar.botaoClicado);

  function handleClick(e) {
    e.preventDefault();

    dispatch(clicar());
  }

  return (
    <Container>
      <Title>Login</Title>
      {clicado ? 'Clicado' : 'Não clicado'}
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
