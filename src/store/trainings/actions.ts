import { Dispatch } from 'redux';
import { getTrainingsRequest } from 'src/services/trainingsServices';

export const getTrainingsAction = (getTrainingsData: {
	token: string;
	email: string;
}) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return async (dispatch: Dispatch<any>) => {
		dispatch({ type: 'FETCH_TRAININGS_REQUEST' });
		/* loginRequest(loginRequestData) */
		getTrainingsRequest(getTrainingsData)
			.then((data) => {
				dispatch({
					type: 'GET_TRAININGS_SUCCESS',
					payload: data,
				});
			})
			.catch((error) => {
				dispatch({
					type: 'GET_TRAININGS_FAILURE',
					payload: error.message,
				});
			});
	};
};
