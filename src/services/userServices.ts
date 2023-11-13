import { getUserInterface, actionData } from 'src/utils/userTypes';
export const getUserRequest = (getUserInfo: getUserInterface) => {
	return fetch('http://localhost:4000/api/users/' + getUserInfo.email, {
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
	return fetch('http://localhost:4000/api/users/' + updatePasswordData.email, {
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
