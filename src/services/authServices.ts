import { loginData, CombinedFormData } from 'src/utils/authTypes';

export const loginRequest = (
	loginRequestData: loginData | CombinedFormData
) => {
	return fetch('http://localhost:4000/api/auth', {
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
	return fetch('http://localhost:4000/api/auth/register', {
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
};
