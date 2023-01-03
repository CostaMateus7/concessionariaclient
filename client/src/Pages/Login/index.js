import React, { useState, useContext } from 'react';
import * as yup from 'yup';

import { Link } from 'react-router-dom';
import Button from '../Button';
import Input from '../Input';
import { AuthContext } from '../Auth';
import {
  Div, Title, Form, FooterStyle,
} from './style';

export default function Login() {
  const { login, status, setStatus } = useContext(AuthContext);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });


  async function handleClick(e) {
    e.preventDefault();

    if (!(await validate(user))) return;

    await login(user.email, user.password);

  }

  const validate = async () => {
    const schema = yup.object().shape({
      password: yup.string('Favor preencher com uma válida')
        .min(6, 'Digite uma senha com no mínimo 6 caracteres')
        .required('Favor preencher com uma senha válida'),
      email: yup.string('Favor preencher com o e-mail válido')
        .email('Favor preencher com o e-mail válido')
        .required('Favor preencher com o e-mail válido'),
    });
    try {
      await schema.validate(user);
      return true;
    } catch (err) {
      setStatus({
        type: 'Erro',
        mensage: err.errors,
      });
      return false;
    }
  };

  return (
    <Div>

      <Title>Login</Title>
      <Form>
        {status.type === 'Sucesso' ? <p>{status.mensage}</p> : ''}
        {status.type === 'Erro' ? <p>{status.mensage}</p> : ''}
        <label
          type="email"
          value={user.email}
        >
          <span>E-mail:</span> 
          <Input
            type="text"
            name="email"
            value={user.email}
            onChange={(e) => setUser({ email: (e.target.value).toLowerCase(), password: user.password })}
          />
        </label>
        <label
          type="password"
          value={user.password}
        >
          Senha:
          <Input
            type="password"
            name="password"
            value={user.password}
            onChange={(e) => setUser({ email: user.email, password: e.target.value })}
          />
        </label>
        <Button
          type="submit"
          onClick={handleClick}
        >
          Logar
        </Button>
        <p>Ainda não possui cadatro?</p>
        <Link to="/cadastro">Cadastrar</Link>
      </Form>
      <FooterStyle> &copy;KavaK</FooterStyle>
    </Div>
  );
}
