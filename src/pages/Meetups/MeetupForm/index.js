import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';
import BannerInput from './BannerInput';
import { meetupCreateRequest } from '~/store/modules/meetup/actions';

export default function MeetupForm() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(meetupCreateRequest(data));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />
        <Input name="title" placeholder="Titulo do meetup" />
        <Input multiline name="description" placeholder="Titulo do meetup" />
        <Input name="date" placeholder="Data do meetup" />
        <Input name="locale" placeholder="Localização" />
        <div>
          <button type="submit">Salvar Meetup</button>
        </div>
      </Form>
    </Container>
  );
}
