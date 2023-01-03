import React, { useState } from 'react';
import * as yup from 'yup';

import Button from '../Button';
import Input from '../Input';
import {
  Div, Title, Form, FooterStyle,
} from './style';
import { Register } from '../../Service/Api';
import { useNavigate, Link } from 'react-router-dom';
export default function Cadastro() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [status, setStatus] = useState(
    {
      type: '',
      mensage: '',
    },
  );

  const handleClick = async (e) => {
    e.preventDefault();
    if (user.password !== user.passwordConfirm) {
      setStatus({
        type: 'Erro',
        mensage: 'Senhas não correspondem',
      });
      return;
    }

    if (!(await validate(user))) return;

    try{
    const response = await Register(user.name, user.email, user.password)
    setStatus(
      {
        type: 'sucesso',
        mensage: response.data,
      },
      navigate('/login')
    );
    } catch(error){
      setStatus(
        {
          type: 'Erro',
          mensage: error.response.data,
        },
      );
    }
  };

  const validate = async () => {
    const schema = yup.object().shape({
      passwordConfirm: yup.string('Favor preencher com senha uma válida')
        .min(6, 'Digite uma senha com no mínimo 6 caracteres')
        .required('Favor preencher com uma senha válida'),
      password: yup.string('Favor preencher com uma válida')
        .min(6, 'Digite uma senha com no mínimo 6 caracteres')
        .required('Favor preencher com uma senha válida'),
      email: yup.string('Favor preencher com o e-mail válido')
        .email('Favor preencher com o e-mail válido')
        .required('Favor preencher com o e-mail válido'),
      name: yup.string('Favor inserir um nome válido')
        .min(3, 'Favor inserir um nome válido')
        .required('Favor inserir um nome'),
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
      <Title>Cadastro</Title>
      <Form>
        {status.type === 'Erro' ? <p>{status.mensage}</p> : ''}
        <label
          type="name"
          value={user.name}
        >
          Nome:
          <Input
            type="text"
            name="name"
            onChange={(e) => setUser({
              name: e.target.value, email: user.email, password: user.password, passwordConfirm: user.passwordConfirm,
            })}
          />
        </label>
        <label
          type="email"
          value={user.email}
        >
          E-mail:
          <Input
            type="text"
            name="email"
            value={user.email}
            onChange={(e) => setUser({
              name: user.name, email: (e.target.value).toLowerCase(), password: user.password, passwordConfirm: user.passwordConfirm,
            })}
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
            onChange={(e) => setUser({
              name: user.name, email: user.email, password: e.target.value, passwordConfirm: user.passwordConfirm,
            })}
          />
        </label>
        <label
          type="password"
          value={user.passwordConfirm}
        >
          Conferir:
          <Input
            type="password"
            name="password"
            value={user.passwordConfirm}
            onChange={(e) => setUser({
              name: user.name, email: user.email, password: user.password, passwordConfirm: e.target.value,
            })}
          />
        </label>
        <Button
          type="submit"
          onClick={handleClick}
        >
          Cadastrar
        </Button>
        <Link to='/'>Home</Link>
      </Form>
      <FooterStyle> &copy;KavaK</FooterStyle>
    </Div>
  );
}
