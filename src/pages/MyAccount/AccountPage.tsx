import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'src/components/common/Button/Button';
import Loading from 'src/components/Loader/Loader';
//store
import { getUserAction } from 'src/store/user/actions';
import { useDispatch, useSelector } from 'react-redux';
//types
import { storedUser } from 'src/utils/userTypes';

import './account-page.scss';
import avatar from '../../assets/images/account/avatar.png';
import status from '../../assets/images/account/status.png';
import table from '../../assets/images/account/table.png';

interface accountPageProps {
	loggedUser: { token: string; email: string };
	loader: boolean;
}

function AccountPage({ loggedUser, loader }: accountPageProps) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const dispatch = useDispatch<any>();
	const userInfo = useSelector((state: storedUser) => state.user);
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getUserAction(loggedUser));
	}, [loggedUser]);

	function goToChangePass() {
		navigate('change-password');
	}

	return (
		<div className='account-container'>
			<Loading active={loader} />
			{/* <Link to='change-passord'>change password</Link> */}
			<p className='account-title'>My Account</p>
			<div className='info-columns'>
				<div className='profile-info'>
					<p className='profile-title'>My profile</p>

					<div className='avatar-img'>
						<img src={avatar} alt='Avatar image' />
						<img src={status} alt='Status image' />
					</div>

					<span className='info-title'>First name:</span>
					<p>{userInfo.name}</p>

					<span className='info-title'>Last name:</span>
					<p>{userInfo.lastName}</p>

					{userInfo.role == 'student' ? (
						<div>
							<p className='info-title'>Birth date:</p>
							<p>{userInfo.dateBirth}</p>
						</div>
					) : null}

					{userInfo.role == 'student' ? (
						<div>
							<p className='info-title'>Address:</p>
							<p>{userInfo.address}</p>
						</div>
					) : null}

					<span className='info-title'>Email:</span>
					<p>{userInfo.email}</p>

					{userInfo.role == 'trainer' ? (
						<div>
							<p className='info-title'>Specialization:</p>
							<p>{userInfo.specialization}</p>
						</div>
					) : null}
				</div>

				<div className='profile-info'>
					<p className='profile-title'>My Trainers</p>
					<img src={table} alt='Trainers table' style={{ marginTop: '27px' }} />
				</div>
			</div>

			<div className='buttons'>
				{/* <div className='edit-btns'> */}
				<Button buttonText='Edit profile' type={true} disabled={false} />
				<Button
					buttonText='Change Password'
					clicHandle={goToChangePass}
					type={true}
					disabled={false}
				/>
				{/* </div> */}
				<Button buttonText='Delete profile' type={true} disabled={false} />
			</div>

			<p className='account-title' style={{ marginTop: '56px' }}>
				My Trainings
			</p>
			<p className='trainings-desc'>
				The Training Section is interactive, allowing you to engage with
				trainers and fellow learners, participate in quizzes, and track your
				progress. All our courses are flexible and adaptable to your schedule
			</p>
			<Button
				buttonText='View trainings'
				styles={{ marginBottom: '36px' }}
				type={true}
				disabled={false}
			/>
		</div>
	);
}

export default AccountPage;
