import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AppRoutes from './AppRoutes';

import './App.scss';

interface storedUser {
	auth: {
		user: {
			token: string;
			email: string;
		};
	};
}

interface storedloading {
	auth: {
		loading: boolean;
	};
}

interface storedLoadingUser {
	user: {
		loading: boolean;
	};
}

function App() {
	const currentUser = useSelector((state: storedUser) => state.auth.user);
	const navigate = useNavigate();
	useEffect(() => {
		if (currentUser) {
			navigate('home', { replace: true });
		}
	}, [currentUser]);

	const stateLoading = useSelector(
		(state: storedloading) => state.auth.loading
	);

	const stateUserLoading = useSelector(
		(state: storedLoadingUser) => state.user.loading
	);

	return (
		<div className='App'>
			<AppRoutes
				currentUser={currentUser}
				stateUserLoading={stateUserLoading}
				stateLoading={stateLoading}
			/>
		</div>
	);
}

export default App;
