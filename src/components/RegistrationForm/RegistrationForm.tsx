import React, { useState, ChangeEvent, FormEvent } from 'react';
//datepicker
import dayjs from 'dayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//redux
import { useDispatch } from 'react-redux';
import { registerAction } from 'src/store/auth/actions';
//components
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
//types
import { StudentFormData, TrainerFormData } from 'src/utils/authTypes';

import './registration-form.scss';

interface RegistrationFormData {
	role: string | undefined;
}

function RegistrationForm({ role }: RegistrationFormData) {
	const [registerData, setRegisterData] = useState<StudentFormData>({
		name: '',
		lastName: '',
		dateBirth: '',
		address: '',
		email: '',
		password: '',
		role: 'student',
	});
	const [registerDataT, setRegisterDataT] = useState<TrainerFormData>({
		name: '',
		lastName: '',
		specialization: '',
		email: '',
		password: '',
		role: 'trainer',
	});

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const dispatch = useDispatch<any>();

	function formatDate(date: dayjs.Dayjs | null) {
		if (date) {
			const dateFormat = date.format('DD/MM/YYYY');
			setRegisterData({
				...registerData,
				dateBirth: dateFormat,
			});
		}
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		if (role === 'student') {
			setRegisterData({
				...registerData,
				[name]: value,
			});
		} else if (role === 'trainer') {
			setRegisterDataT({
				...registerDataT,
				[name]: value,
			});
		}
	};

	function handleButtonClick(event: FormEvent) {
		event.preventDefault();
		if (role === 'student') {
			dispatch(registerAction(registerData));
		} else if (role === 'trainer') {
			dispatch(registerAction(registerDataT));
		}
	}

	function formType() {
		if (role === 'student') {
			return (
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<form onSubmit={handleButtonClick} className='register-form'>
						<div className='form-inputs'>
							<p className='input-title'>First name</p>
							<Input
								placeholder='First name'
								handleChange={handleChange}
								val={registerData.name}
								type='text'
								name='name'
								styles={{ marginBottom: '16px' }}
							/>

							<p className='input-title'>Last name</p>
							<Input
								placeholder='Last name'
								handleChange={handleChange}
								val={registerData.lastName}
								type='text'
								name='lastName'
								styles={{ marginBottom: '16px' }}
							/>

							<p className='input-title'>Address</p>
							<Input
								placeholder='Address'
								handleChange={handleChange}
								val={registerData.address}
								type='text'
								name='address'
								styles={{ marginBottom: '16px' }}
							/>

							<div>
								<p className='input-title'>Date of birth</p>
								<DatePicker
									onChange={(newValue: dayjs.Dayjs | null) => {
										formatDate(newValue);
									}}
								/>
							</div>

							<p className='input-title'>Email</p>
							<Input
								placeholder='Email'
								handleChange={handleChange}
								val={registerData.email}
								type='email'
								name='email'
								styles={{ marginBottom: '16px', marginTop: '16px' }}
							/>
							<p className='input-title'>Password</p>
							<Input
								placeholder='Password'
								handleChange={handleChange}
								val={registerData.password}
								type='password'
								name='password'
								styles={{ marginBottom: '16px' }}
							/>
						</div>
						<Button
							buttonText='Register'
							type={true}
							disabled={
								registerData.name.length < 4 ||
								registerData.lastName.length < 4 ||
								registerData.email.length < 4 ||
								registerData.password.length < 4
							}
						/>
					</form>
				</LocalizationProvider>
			);
		} else if (role === 'trainer') {
			return (
				<div>
					<form onSubmit={handleButtonClick} className='register-form'>
						<div className='form-inputs'>
							<p className='input-title'>First name</p>
							<Input
								placeholder='First name'
								handleChange={handleChange}
								val={registerDataT.name}
								type='text'
								name='name'
								styles={{ marginBottom: '16px' }}
							/>

							<p className='input-title'>Last name</p>
							<Input
								placeholder='Last name'
								handleChange={handleChange}
								val={registerDataT.lastName}
								type='text'
								name='lastName'
								styles={{ marginBottom: '16px' }}
							/>

							<p className='input-title'>Specialization</p>
							<Input
								placeholder='Specialization'
								handleChange={handleChange}
								val={registerDataT.specialization}
								type='text'
								name='specialization'
								styles={{ marginBottom: '16px' }}
							/>

							<p className='input-title'>Email</p>
							<Input
								placeholder='Email'
								handleChange={handleChange}
								val={registerDataT.email}
								type='email'
								name='email'
								styles={{ marginBottom: '16px' }}
							/>

							<p className='input-title'>Password</p>
							<Input
								placeholder='Password'
								handleChange={handleChange}
								val={registerDataT.password}
								type='password'
								name='password'
								styles={{ marginBottom: '16px' }}
							/>
						</div>
						<Button
							buttonText='Register'
							type={true}
							disabled={
								registerDataT.name.length < 4 ||
								registerDataT.lastName.length < 4 ||
								registerDataT.email.length < 4 ||
								registerDataT.password.length < 4 ||
								registerDataT.specialization.length < 2
							}
						/>
					</form>
				</div>
			);
		}
	}

	return <div>{formType()}</div>;
}

export default RegistrationForm;
