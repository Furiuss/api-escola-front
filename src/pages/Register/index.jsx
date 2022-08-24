import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../services/axios';

export default function Register() {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('O nome precisa ter entre 3 e 255 caracteres');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Email inválido');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('A senha precisa ter entre 6 e 50 caracteres');
    }

    if (password !== confirmPassword) {
      formErrors = true;
      toast.error('As senhas não coincidem');
    }

    if (formErrors) return;

    try {
      await axios.post('/users', {
        nome,
        email,
        password,
      });

      toast.success('Usuário criado com sucesso');
    } catch (err) {
      toast.error('Erro ao criar usuário');
      const status = get(e, 'response.status', 0);
      const errors = get(e, 'response.data.errors', []);
    }
  }

  return (
    <Container>
      <h1>Crie sua conta</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
            id="nome"
            placeholder="Digite seu nome"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Digite seu email"
          />
        </label>
        <label htmlFor="senha">
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="Digite sua senha"
          />
        </label>
        <label htmlFor="senha">
          Confirme a senha:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            id="password"
            placeholder="Digite sua senha novamente"
          />
        </label>
        <button type="submit">CRIAR CONTA</button>
      </Form>
    </Container>
  );
}
