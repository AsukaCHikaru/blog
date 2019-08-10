import { combineReducers } from "redux";
import {
  IMPORT_POSTDATA,
  SET_POST_FILTER,
  SET_POST_READING
} from "./actionTypes";
import { CATEGORIES, POST_FILTER_TYPES } from "../constants";
import { postdata } from "../postdata";

const initialState = {};

const allPostData = function(state = initialState, action) {
  switch (action.type) {
    case IMPORT_POSTDATA:
      return postdata;
    default:
      return state;
  }
};

const postFilter = function(state = {type: 'category', 'context': 'all'} , action) {
  switch (action.type) {
    case SET_POST_FILTER: {
      return action.payload.postFilter;
    }
    default: {
      return state;
    }
  }
};

const postReading = function(state = initialState, action) {
  switch (action.type) {
    case SET_POST_READING:
      return action.payload.postReading;
    default:
      return state;
  }
};

export const rootReducers = combineReducers({
  allPostData,
  postFilter,
  postReading
});
