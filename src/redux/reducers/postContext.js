import { SET_POSTCONTEXT } from '../actionTypes';

const initialState = {};

export default function posts(state = initialState, action){
  switch (action.type) {
    case SET_POSTCONTEXT:
      return action.payload.postContext;
    default:
      return state;
  }
};