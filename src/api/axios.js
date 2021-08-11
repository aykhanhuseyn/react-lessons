import axios from 'axios';
import { baseURL } from './apiRoutes';

const instance = axios.create({
	baseURL,
	headers: {
		Authorization: 'Bearer token',
		Accept: 'application/json',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
});

export default instance;
