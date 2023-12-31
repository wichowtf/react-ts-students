import { Dispatch } from 'redux';
import {
	UserActionTypes,
	loginData,
	CombinedFormData,
} from '../../utils/authTypes';
import {
	/* loginRequest,
	registerRequest, */
	postApiRequest,
} from 'src/services/authServices';

export const loginAction = (loginRequestData: loginData) => {
	return async (dispatch: Dispatch<UserActionTypes>) => {
		dispatch({ type: 'FETCH_LOGIN_REQUEST' });
		/* loginRequest(loginRequestData) */
		postApiRequest(loginRequestData, 'auth')
			.then((data) => {
				const aux = {
					token: data.token,
					email: loginRequestData.email,
				};
				dispatch({
					type: 'FETCH_LOGIN_SUCCESS',
					payload: aux,
				});
			})
			.catch((error) => {
				dispatch({
					type: 'FETCH_LOGIN_FAILURE',
					payload: error.message,
				});
			});
	};
};

export const registerAction = (registerRequestData: CombinedFormData) => {
	return async (dispatch: Dispatch) => {
		dispatch({ type: 'FETCH_LOGIN_REQUEST' });
		/* registerRequest(registerRequestData) */
		postApiRequest(registerRequestData, 'auth/register')
			.then((data) => {
				const aux = {
					token: data.token,
					email: registerRequestData.email,
				};
				dispatch({
					type: 'FETCH_REGISTER_SUCCESS',
					payload: aux,
				});
			})
			.catch((error) => {
				dispatch({
					type: 'FETCH_LOGIN_FAILURE',
					payload: error.message,
				});
			});
	};
};

export const handleLogout = () => ({
	type: 'HANDLE_LOGOUT',
});
