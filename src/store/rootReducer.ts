import { combineReducers } from 'redux';

import authReducer from './auth/reducer';
import userReducer from './user/reducer';
import trainingsReducer from './trainings/reducer';

const rootReducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	trainings: trainingsReducer,
});

export default rootReducer;
