import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>VAMOS TODOS NOS DIVERTIR!</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
