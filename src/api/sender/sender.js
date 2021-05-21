import axios from 'axios';
import { toast } from 'react-toastify';

const API_BASE_URL = 'http://localhost:3000';

function handleResponse(res) {
	if (!res.data) {
		return Promise.reject('Something went wrong');
	} else {
		if (res.data.success) {
			if (res.data.warning) {
				// toast
				toast.warn(res.data.warning);
			}
			return Promise.resolve(res.data.data);
		} else {
			return Promise.reject(res.data.reason);
		}
	}
}

export function httpGet(route, params, token) {
	let url = `${API_BASE_URL}${route}`;
	const headers = token ? { token } : undefined;
	return axios.get(url, { headers, params }).then(handleResponse);
}

export function httpPost(route, payload, token) {
	let url = `${API_BASE_URL}${route}`;
	const headers = token ? { token } : undefined;
	return axios.post(url, payload, { headers }).then(handleResponse);
}

export function httpPut(route, payload, token) {
	let url = `${API_BASE_URL}${route}`;
	const headers = token ? { token } : undefined;
	return axios.put(url, payload, { headers }).then(handleResponse);
}

export function httpDelete(route, payload, token) {}
