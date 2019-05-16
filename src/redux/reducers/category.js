import { SET_CATEGORY } from '../actionTypes';
import { CATEGORIES } from '../../constants';

const initialState = CATEGORIES.ALL;
 
export default function category(state = initialState, action){
  switch(action.type){    
    case SET_CATEGORY: {
      return action.payload.category;
    }
    default: {
      return state;
    }
  }
};