import { combineReducers } from 'redux';
import postFilter from './postFilter';
import posts from './posts';

export default combineReducers({ posts, postFilter });