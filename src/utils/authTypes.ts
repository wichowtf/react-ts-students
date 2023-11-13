//login
export interface loginData {
	email: string;
	password: string;
}

//reducer actions
export interface AppState {
	loading: boolean;
	user: object | null;
	error: string | null;
}

interface FetchUsersRequestAction {
	type: 'FETCH_LOGIN_REQUEST';
}

interface HandleLogout {
	type: 'HANDLE_LOGOUT';
}

interface FetchUsersSuccessAction {
	type: 'FETCH_LOGIN_SUCCESS';
	payload: { token: string; email: string };
}

interface FetchUsersFailureAction {
	type: 'FETCH_LOGIN_FAILURE';
	payload: string;
}

interface FetchRegisterSuccessAction {
	type: 'FETCH_REGISTER_SUCCESS';
	payload: { token: string; email: string };
}

export type UserActionTypes =
	| HandleLogout
	| FetchUsersRequestAction
	| FetchUsersSuccessAction
	| FetchUsersFailureAction
	| FetchRegisterSuccessAction;

//register
interface CommonFormData {
	name: string;
	lastName: string;
	email: string;
	password: string;
	role: string;
}

export interface StudentFormData extends CommonFormData {
	dateBirth: string;
	address: string;
}

export interface TrainerFormData extends CommonFormData {
	specialization: string;
}

export type CombinedFormData = StudentFormData | TrainerFormData;
