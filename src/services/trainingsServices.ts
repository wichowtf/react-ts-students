const apiUrl = process.env.REACT_APP_API_URL;
export const getTrainingsRequest = (getTrainingsData: {
	token: string;
	email: string;
}) => {
	return fetch(apiUrl + 'trainings/', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'x-token': getTrainingsData.token,
		},
	}).then((response) => {
		if (!response.ok) {
			throw new Error('Error fetching user');
		}
		return response.json();
	});
};
