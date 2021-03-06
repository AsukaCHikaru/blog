import { SET_POST_FILTER, IMPORT_POSTDATA, SET_POSTCONTEXT, SET_POST_READING } from './actionTypes';

export const setPostFilter = ({type, context}) => ({
  type: SET_POST_FILTER,
  payload: {
    postFilter: { type, context }
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

export const setPostReading = postReading => ({
  type: SET_POST_READING,
  payload: {
    postReading
  }
});