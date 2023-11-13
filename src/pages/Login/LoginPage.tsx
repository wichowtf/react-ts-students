import React from 'react';

import LoginForm from 'src/components/LoginForm/LoginForm';
import Loading from 'src/components/Loader/Loader';

import './login-page.scss';

interface loaderProps {
	loader: boolean;
}

function LoginPage({ loader }: loaderProps) {
	return (
		<div className='login-container'>
			<LoginForm />
			<Loading active={loader} />
		</div>
	);
}

export default LoginPage;
