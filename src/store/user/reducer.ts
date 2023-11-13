import { GetUserActionTypes } from '../../utils/userTypes';
const initialState = {
	user: {
		name: '',
		lastName: '',
		dateBirth: '',
		address: '',
		email: '',
		role: '',
	},
	error: null,
	loading: false,
};
const userReducer = (state = initialState, action: GetUserActionTypes) => {
	switch (action.type) {
		case 'FETCH_USER_REQUEST':
			return {
				...state,
				loading: true,
			};
		case 'GET_USER_SUCCESS':
			return {
				...state,
				name: action.payload.user.name,
				lastName: action.payload.user.lastName,
				dateBirth: action.payload.user.dateBirth,
				address: action.payload.user.address,
				email: action.payload.user.email,
				role: action.payload.user.role,
				specialization: action.payload.user.specialization,
				loading: false,
			};
		case 'GET_USER_FAILURE':
			return {
				...state,
				user: initialState.user,
				error: action.payload,
				loading: false,
			};
		case 'UPDATE_USER_SUCCESS':
			return {
				...state,
				loading: false,
			};
		/* case 'UPDATE_USER_FAILURE':
				return {
					...state,
					loading: false,
				} */
		default:
			return state;
	}
};

export default userReducer;
