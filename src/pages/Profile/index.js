import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';
import { userUpdateRequest } from '~/store/modules/user/actions';

export default function Profile() {
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  function handleSumit(params) {
    dispatch(userUpdateRequest(params));
  }

  return (
    <Container>
      <Form initialData={user} onSubmit={handleSumit}>
        <Input name="name" placeholder="Seu nome" />
        <Input name="email" placeholder="Seu email" />
        <span />
        <Input type="password" name="oldPassword" placeholder="Senha atual" />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />
        <div>
          <button type="submit">Salvar perfil</button>
        </div>
      </Form>
    </Container>
  );
}
