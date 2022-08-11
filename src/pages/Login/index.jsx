import React from "react";

import { Container } from "../../styles/GlobalStyles";
import { Title, Paragrafo } from "./styled";

export function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>VAMOS TODOS NOS DIVERTIR!</Paragrafo>
      <h1>TESTE</h1>
    </Container>
  );
}
