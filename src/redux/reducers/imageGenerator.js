import { ADD_IMAGE_CONFIG } from '../actionTypes'

const initialState = {
  image: '',
};

const imageGenerator = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGE_CONFIG:
      return {
        ...state,
        image: action.image,
      }
    default:
      return state;
  }
}

export default imageGenerator;
