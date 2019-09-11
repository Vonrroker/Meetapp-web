import { produce } from 'immer';

const INITIAL_STATE = {
  name: null,
  email: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.name = action.payload.user.name;
        draft.email = action.payload.user.email;
        break;
      }
      default:
    }
  });
}
