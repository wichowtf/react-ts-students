const initialState = {
	loading: false,
	trainings: [],
	error: null,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const trainingsReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case 'FETCH_TRAININGS_REQUEST':
			return {
				...state,
				loading: true,
			};
		case 'GET_TRAININGS_SUCCESS':
			return {
				...state,
				loading: false,
				trainings: action.payload.trainings,
				error: null,
			};
		case 'GET_TRAININGS_FAILURE':
			return {
				...state,
				loading: false,
				user: null,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default trainingsReducer;
