import { SET_AUTH_TOKEN } from '../actionTypes';

const initialState = {
  token: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default auth;
