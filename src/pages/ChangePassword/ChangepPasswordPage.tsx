import React, { FormEvent, useState, ChangeEvent } from 'react';
//store
import { useDispatch } from 'react-redux';
import { updateUserPasswordAction } from 'src/store/user/actions';
//components
import Input from 'src/components/common/Input/Input';
import Button from 'src/components/common/Button/Button';

import './change-password.scss';

interface accountPageProps {
	loggedUser: { token: string; email: string };
}

interface stateFormat {
	oldPassword: string;
	newPassword: string;
	newPasswordConfirm: string;
}

function ChangePasswordPage({ loggedUser }: accountPageProps) {
	const [passwordData, setPasswordData] = useState<stateFormat>({
		oldPassword: '',
		newPassword: '',
		newPasswordConfirm: '',
	});
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const dispatch = useDispatch<any>();

	function handleButtonClick(event: FormEvent) {
		event.preventDefault();
		const auxData = {
			body: {
				oldPassword: passwordData.oldPassword,
				newPassword: passwordData.newPassword,
			},
			email: loggedUser.email,
			token: loggedUser.token,
		};
		dispatch(updateUserPasswordAction(auxData));
		console.log(passwordData);
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setPasswordData({
			...passwordData,
			[name]: value,
		});
	};
	return (
		<div className='page-container'>
			<p className='title'>Security</p>

			<p className='subtitle-change'>Change Password</p>
			<div>
				<form onSubmit={handleButtonClick} className='form-container'>
					<Input
						placeholder='Old password'
						handleChange={handleChange}
						val={passwordData.oldPassword}
						type='text'
						name='oldPassword'
						styles={{ marginBottom: '18px' }}
					/>
					<Input
						placeholder='New Password'
						type='text'
						handleChange={handleChange}
						val={passwordData.newPassword}
						name='newPassword'
						styles={{ marginBottom: '18px' }}
					/>
					<Input
						placeholder='Confirm new password'
						type='text'
						handleChange={handleChange}
						val={passwordData.newPasswordConfirm}
						name='newPasswordConfirm'
						styles={{ marginBottom: '18px' }}
					/>
					<Button
						buttonText='Login'
						type={true}
						disabled={
							passwordData.oldPassword == '' ||
							passwordData.newPassword !== passwordData.newPasswordConfirm ||
							passwordData.newPasswordConfirm.length < 6
						}
					/>
				</form>
			</div>
		</div>
	);
}

export default ChangePasswordPage;
