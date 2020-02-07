import { ADD_IMAGE_CONFIG } from '../actionTypes';

export const addImage = (urlImage) => ({
  type: ADD_IMAGE_CONFIG,
  image: urlImage,
});
