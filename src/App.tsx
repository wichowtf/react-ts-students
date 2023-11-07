import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './layout/Layout';
import PrivateRoutes from './components/PrivateRoute/PrivateRoute';
import LoginPage from './pages/Login/LoginPage';
import Registration from './pages/Registration/RegistrationPage';

import './App.scss';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route element={<PrivateRoutes isAuth={false} />}>
						<Route index element={<div>logged in</div>}></Route>
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
