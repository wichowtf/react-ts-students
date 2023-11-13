import {
	getUserRequest,
	updateUserPasswordRequest,
} from 'src/services/userServices';
import { Dispatch } from 'redux';
import { getUserInterface, actionData } from '../../utils/userTypes';

export const getUserAction = (getUserRequestData: getUserInterface) => {
	return async (dispatch: Dispatch) => {
		/* dispatch({ type: 'FETCH_LOGIN_REQUEST' }); */
		getUserRequest(getUserRequestData)
			.then((data) => {
				dispatch({
					type: 'GET_USER_SUCCESS',
					payload: data,
				});
			})
			.catch((error) => {
				dispatch({
					type: 'GET_USER_FAILURE',
					payload: error.message,
				});
			});
	};
};

export const updateUserPasswordAction = (updatePasswordData: actionData) => {
	console.log('newpass action', updatePasswordData);
	return async (dispatch: Dispatch) => {
		/* dispatch({ type: 'FETCH_LOGIN_REQUEST' }); */
		updateUserPasswordRequest(updatePasswordData)
			.then((data) => {
				dispatch({
					type: 'UPDATE_USER_SUCCESS',
					payload: data,
				});
			})
			.catch((error) => {
				dispatch({
					type: 'UPDATE_USER_FAILURE',
					payload: error.message,
				});
			});
	};
};
