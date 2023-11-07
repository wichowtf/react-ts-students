import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

interface PrivateRoutesProps {
	isAuth: boolean;
	// Puedes agregar más props según tus necesidades
}

/* function PrivateRoutes(isAuth: PrivateRoutesProps) {
	return isAuth ? <Outlet /> : <Navigate to='/login' />;
} */

const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ isAuth }) => {
	return isAuth ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoutes;
