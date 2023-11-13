import { getUserInterface, actionData } from 'src/utils/userTypes';

const apiUrl = process.env.REACT_APP_API_URL;

export const getUserRequest = (getUserInfo: getUserInterface) => {
	return fetch(apiUrl + 'users/' + getUserInfo.email, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'x-token': getUserInfo.token,
		},
	}).then((response) => {
		if (!response.ok) {
			throw new Error('Error fetching user');
		}
		return response.json();
	});
};

export const updateUserPasswordRequest = (updatePasswordData: actionData) => {
	return fetch(apiUrl + 'users/' + updatePasswordData.email, {
		method: 'PUT',
		body: JSON.stringify(updatePasswordData.body),
		headers: {
			'Content-Type': 'application/json',
			'x-token': updatePasswordData.token,
		},
	}).then((response) => {
		if (!response.ok) {
			throw new Error('Error fetching user');
		}
		return response.json();
	});
};
