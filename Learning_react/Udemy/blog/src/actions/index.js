import jsonplaceholder from '../apis/jsonPlaceHolder.js';
import _ from 'lodash';
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
	await dispatch(fetchPosts());
	const usersIds = _.uniq(_.map(getState().posts, 'userId'));
	usersIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
	const response = await jsonplaceholder.get('/posts');

	dispatch({ type: 'FETCH_POST', payload: response.data });
};

export const fetchUser = id => async dispatch => {
	const response = await jsonplaceholder.get(`/users/${id}`);

	dispatch({ type: 'FETCH_USER', payload: response.data });
};

//const _fetchUser = _.memoize(async (id, dispatch) => {
//	/const response = await jsonplaceholder.get(`/users/${id}`);

//	dispatch({ type: 'FETCH_USER', payload: response.data });
//});
