import React, { FormEvent, useState, ChangeEvent } from 'react';
//redux
import { useDispatch } from 'react-redux';
import { loginAction } from 'src/store/auth/actions';
//components
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
//types
import { loginData } from 'src/utils/authTypes';

import './login-form.scss';

function LoginForm() {
	const [loginData, setLoginData] = useState<loginData>({
		email: '',
		password: '',
	});

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const dispatch = useDispatch<any>();

	function handleButtonClick(event: FormEvent) {
		event.preventDefault();
		dispatch(loginAction(loginData));
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
			<p className='title-text'>Singn In</p>
			<p className='subtitle-text'>Welcome back</p>
			<div>
				<p className='input-title'>User email:</p>
				<Input
					placeholder='Email'
					handleChange={handleChange}
					val={loginData.email}
					type='email'
					name='email'
					styles={{ marginBottom: '16px' }}
				/>
				<p className='input-title'>Password:</p>
				<Input
					placeholder='Password'
					type='password'
					handleChange={handleChange}
					val={loginData.password}
					name='password'
					styles={{ marginBottom: '16px' }}
				/>
			</div>

			<Button
				buttonText='Login'
				type={true}
				disabled={loginData.email.length < 4 || loginData.password.length < 6}
			/>
		</form>
	);
}

export default LoginForm;
