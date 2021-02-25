import jsonplaceholder from '../apis/jsonPlaceHolder.js';

export const fetchPosts = () => async dispatch => {
	const response = await jsonplaceholder.get('/posts');

	dispatch({ type: 'FETCH_POST', payload: response });
};
