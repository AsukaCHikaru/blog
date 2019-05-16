import { SET_CATEGORY, IMPORT_POSTDATA, GET_POSTS } from './actionTypes';

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

export const getPosts = category => ({
  type: GET_POSTS,
  payload: {
    category
  }
});