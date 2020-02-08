import { combineReducers } from 'redux';

import imageGenerator from './imageGenerator';
import auth from './auth';


export default combineReducers({
  auth,
  imageGenerator,
});
