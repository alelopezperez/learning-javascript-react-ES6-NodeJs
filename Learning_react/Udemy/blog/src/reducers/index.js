import { combineReducers } from 'redux';
import postReducer from './postReducer.js';
import usersReducer from './usersReducer';

export default combineReducers({
	posts: postReducer,
	users: usersReducer,
});
