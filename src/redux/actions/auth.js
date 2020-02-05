import { SET_AUTH_TOKEN} from '../actionTypes'

export const setToken = (toke) => ({
  type: SET_AUTH_TOKEN,
  token,
});
