import { IMPORT_POSTDATA } from '../actionTypes';
import { postdata } from '../../postdata';

const initialState = postdata;

export default function posts(state = initialState, action){
  switch (action.type) {
    case IMPORT_POSTDATA:
      return state;
    default:
      return state;
  }
};