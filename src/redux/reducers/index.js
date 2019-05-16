import { combineReducers } from 'redux';
import category from './category';
import posts from './posts';

export default combineReducers({ posts, category });