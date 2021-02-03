import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID -NqVKILryRqIBIX_Pz_CNWvs8lEjlj1NT4CVt20pi_0',
	},
});
