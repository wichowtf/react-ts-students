import { UserActionTypes, AppState } from '../../utils/authTypes';

const initialState: AppState = {
	loading: false,
	user: null,
	error: null,
};

const authReducer = (state = initialState, action: UserActionTypes) => {
	switch (action.type) {
		case 'FETCH_LOGIN_REQUEST':
			return {
				...state,
				loading: true,
			};
		case 'FETCH_LOGIN_SUCCESS':
			return {
				...state,
				loading: false,
				user: { token: action.payload.token, email: action.payload.email },
				error: null,
			};
		case 'FETCH_LOGIN_FAILURE':
			return {
				...state,
				loading: false,
				user: null,
				error: action.payload,
			};
		case 'FETCH_REGISTER_SUCCESS':
			return {
				...state,
				loading: false,
				user: { token: action.payload.token, email: action.payload.email },
				error: null,
			};
		case 'HANDLE_LOGOUT':
			return initialState;
		default:
			return state;
	}
};

export default authReducer;
