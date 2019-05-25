import { SET_CATEGORY, IMPORT_POSTDATA, SET_POSTCONTEXT } from './actionTypes';

export const setCategory = category => ({
  type: SET_CATEGORY,
  payload: {
    category
  }
});

export const importPostData = posts => ({
  type: IMPORT_POSTDATA,
  payload: {
    posts
  }
});

export const setPostContext = postContext => ({
  type: SET_POSTCONTEXT,
  payload: {
    postContext
  }
});