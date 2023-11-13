import React, { useEffect } from 'react';
//router
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
//store
import { useSelector } from 'react-redux';
//pages
import Layout from './layout/Layout';
import PrivateRoutes from './components/PrivateRoute/PrivateRoute';
import LoginPage from './pages/Login/LoginPage';
import Registration from './pages/Registration/RegistrationPage';
import HomePage from './pages/Home/HomePage';
import AccountPage from './pages/MyAccount/AccountPage';
import ChangePasswordPage from './pages/ChangePassword/ChangepPasswordPage';

import './App.scss';

interface storedUser {
	auth: {
		user: {
			token: string;
			email: string;
		};
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

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route
						element={<PrivateRoutes isAuth={currentUser ? true : false} />}
					>
						<Route path='home' element={<HomePage />}></Route>
						<Route
							path='account'
							element={<AccountPage loggedUser={currentUser} />}
						></Route>
						<Route
							path='account/change-passord'
							element={<ChangePasswordPage loggedUser={currentUser} />}
						></Route>
					</Route>
					<Route path='login' element={<LoginPage />} />
					<Route path='registration/:role' element={<Registration />} />
					<Route path='/*' element={<Navigate to='/registration/student' />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
