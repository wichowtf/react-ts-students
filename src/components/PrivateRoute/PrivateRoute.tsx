import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

interface PrivateRoutesProps {
	isAuth: boolean;
}

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ isAuth }) => {
	return isAuth ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoutes;
