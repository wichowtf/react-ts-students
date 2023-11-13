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
			};
		case 'GET_USER_FAILURE':
			return {
				...state,
				user: initialState.user,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
