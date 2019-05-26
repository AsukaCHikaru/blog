import { SET_POST_FILTER } from '../actionTypes';
import { CATEGORIES, POST_FILTER_TYPES } from '../../constants';

const initialState = {
  type: POST_FILTER_TYPES.CATEGORY,
  context: CATEGORIES.ALL,
};
 
export default function postFilter(state = initialState, action){
  switch(action.type){    
    case SET_POST_FILTER: {
      return action.payload.postFilter;
    }
    default: {
      return state;
    }
  }
};