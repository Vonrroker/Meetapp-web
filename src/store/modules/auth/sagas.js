import { call, all, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { signInSuccess } from './actions';
import history from '~/services/history';

console.tron.log('test');
function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', { email, password });

    const { user, token } = response.data;

    if (!token) {
      toast.error('Usuario ou senha invalidos');
      return;
    }
    yield put(signInSuccess(user, token));

    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha ao fazer login');
  }
}

function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', { name, email, password });

    history.push('/');
  } catch (error) {
    toast.error('falha ao criar usuario');
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
