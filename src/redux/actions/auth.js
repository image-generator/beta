import { SET_AUTH_TOKEN } from '../actionTypes';

export const setToken = (token) => ({
  type: SET_AUTH_TOKEN,
  token,
});
