export interface getUserInterface {
	token: string;
	email: string;
}
//reducer actions
export interface storedUser {
	user: {
		name: string;
		lastName: string;
		dateBirth: string | undefined;
		address: string | undefined;
		email: string;
		role: string;
		specialization: string | undefined;
	};
}

interface FetchUserSuccessAction {
	type: 'GET_USER_SUCCESS';
	payload: storedUser;
}

interface FetchUserFailureAction {
	type: 'GET_USER_FAILURE';
	payload: string;
}

export type GetUserActionTypes =
	| FetchUserSuccessAction
	| FetchUserFailureAction;

export interface actionData {
	body: {
		oldPassword: string;
		newPassword: string;
	};
	email: string;
	token: string;
}
