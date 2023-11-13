import { loginData, CombinedFormData } from 'src/utils/authTypes';

const apiUrl = process.env.REACT_APP_API_URL;

/* export const loginRequest = (
	loginRequestData: loginData | CombinedFormData
) => {
	return fetch(apiUrl + 'auth', {
		method: 'POST',
		body: JSON.stringify(loginRequestData),
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((response) => {
		if (!response.ok) {
			throw new Error('Error fetching user');
		}
		return response.json();
	});
};

export const registerRequest = (registerRequestData: CombinedFormData) => {
	return fetch(apiUrl + 'auth/register', {
		method: 'POST',
		body: JSON.stringify(registerRequestData),
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((response) => {
		if (!response.ok) {
			throw new Error('Error fetching user');
		}
		return response.json();
	});
}; */

export const postApiRequest = (
	postApiRequestData: loginData | CombinedFormData,
	url: string
) => {
	return fetch(apiUrl + url, {
		method: 'POST',
		body: JSON.stringify(postApiRequestData),
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((response) => {
		if (!response.ok) {
			throw new Error('Error fetching user');
		}
		return response.json();
	});
};
