import React, { useState, ChangeEvent, FormEvent } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import Input from '../common/Input/Input';
import Button from '../common/Button/Button';

import './registration-form.scss';

interface RegistrationFormData {
	role: string;
}

interface FormData {
	name: string;
	lastName: string;
	dateBirth: string;
	address: string;
	email: string;
	password: string;
	role: string;
}

function RegistrationForm({ role }: RegistrationFormData) {
	const [registerData, setRegisterData] = useState<FormData>({
		name: '',
		lastName: '',
		dateBirth: '',
		address: '',
		email: '',
		password: '',
		role,
	});

	function formatDate(date: dayjs.Dayjs | null) {
		if (date) {
			console.log(date.format('DD/MM/YYYY'));
		}
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setRegisterData({
			...registerData,
			[name]: value,
		});
	};

	function handleButtonClick(event: FormEvent) {
		event.preventDefault();
		console.log(registerData);
	}

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<form onSubmit={handleButtonClick} className='register-form'>
				Register Form
				<Input
					placeholder='First name'
					handleChange={handleChange}
					val={registerData.name}
					type='text'
					name='name'
				/>
				<Input
					placeholder='Last name'
					handleChange={handleChange}
					val={registerData.lastName}
					type='text'
					name='lastName'
				/>
				<Input
					placeholder='Email'
					handleChange={handleChange}
					val={registerData.email}
					type='email'
					name='email'
				/>
				<Input
					placeholder='Password'
					handleChange={handleChange}
					val={registerData.password}
					type='password'
					name='password'
				/>
				<DatePicker
					onChange={(newValue: dayjs.Dayjs | null) => {
						formatDate(newValue);
					}}
				/>
				<Input
					placeholder='Address'
					handleChange={handleChange}
					val={registerData.address}
					type='text'
					name='address'
				/>
				<Button buttonText='Register' type={true} disabled={false} />
			</form>
		</LocalizationProvider>
	);
}

export default RegistrationForm;
