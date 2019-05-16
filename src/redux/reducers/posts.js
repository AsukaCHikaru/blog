import { IMPORT_POSTDATA, GET_POSTS } from '../actionTypes';
import { postdata } from '../../postdata';

const initialState = postdata;

export default function posts(state = initialState, action){
  switch (action.type) {
    case IMPORT_POSTDATA:
      return state;
    case GET_POSTS:
      const { category } = action.payload.category;
      return state[category];
    default:
      return state;
  }
};