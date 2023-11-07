import React, { FormEvent, useState, ChangeEvent } from 'react';

import Input from '../common/Input/Input';
import Button from '../common/Button/Button';

import './login-form.scss';

interface FormData {
	email: string;
	password: string;
}

function LoginForm() {
	const [loginData, setLoginData] = useState<FormData>({
		email: '',
		password: '',
	});

	function handleButtonClick(event: FormEvent) {
		event.preventDefault();
		console.log(loginData);
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setLoginData({
			...loginData,
			[name]: value,
		});
	};

	return (
		<form onSubmit={handleButtonClick} className='login-form'>
			LoginForm
			<Input
				placeholder='Email'
				handleChange={handleChange}
				val={loginData.email}
				type='email'
				name='email'
			/>
			<Input
				placeholder='Password'
				type='password'
				handleChange={handleChange}
				val={loginData.password}
				name='password'
			/>
			<Button buttonText='Login' type={true} disabled={false} />
		</form>
	);
}

export default LoginForm;
