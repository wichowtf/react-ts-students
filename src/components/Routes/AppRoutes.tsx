import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoutes from '../PrivateRoute/PrivateRoute';
import HomePage from '../../pages/Home/HomePage';
import AccountPage from '../../pages/MyAccount/AccountPage';
import ChangePasswordPage from '../../pages/ChangePassword/ChangepPasswordPage';
import Layout from '../../layout/Layout';
import LoginPage from '../../pages/Login/LoginPage';
import Registration from '../../pages/Registration/RegistrationPage';
import BlogPage from 'src/pages/Blog/BlogPage';

interface authStoredData {
	token: string;
	email: string;
}

interface AppRoutesProps {
	currentUser: authStoredData;
	stateUserLoading: boolean;
	stateLoading: boolean;
}

const AppRoutes: React.FC<AppRoutesProps> = ({
	currentUser,
	stateUserLoading,
	stateLoading,
}) => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route element={<PrivateRoutes isAuth={currentUser ? true : false} />}>
					<Route path='home' element={<HomePage />} />
					<Route
						path='account'
						element={
							<AccountPage loggedUser={currentUser} loader={stateUserLoading} />
						}
					/>
					<Route
						path='account/change-password'
						element={<ChangePasswordPage loggedUser={currentUser} />}
					/>
				</Route>
				<Route path='login' element={<LoginPage loader={stateLoading} />} />
				<Route
					path='registration/:role'
					element={<Registration loader={stateLoading} />}
				/>
				<Route path='blog' element={<BlogPage />} />
				<Route path='/*' element={<Navigate to='/registration/student' />} />
				<Route path='/' element={<Navigate to='login' />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
