import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
//store
import { getUserAction } from 'src/store/user/actions';
import { useDispatch, useSelector } from 'react-redux';
//types
import { storedUser } from 'src/utils/userTypes';

interface accountPageProps {
	loggedUser: { token: string; email: string };
}

function AccountPage({ loggedUser }: accountPageProps) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const dispatch = useDispatch<any>();
	const userInfo = useSelector((state: storedUser) => state.user);

	useEffect(() => {
		dispatch(getUserAction(loggedUser));
	}, [loggedUser]);

	return (
		<div>
			<Link to='change-passord'>change password</Link>
			<p>
				<span>First name:</span> {userInfo.name}
			</p>
			<p>
				<span>Last name:</span> {userInfo.lastName}
			</p>
			{userInfo.role == 'student' ? (
				<p>
					<span>Birth date:</span> {userInfo.dateBirth}
				</p>
			) : null}
			{userInfo.role == 'student' ? (
				<p>
					<span>Address:</span> {userInfo.address}
				</p>
			) : null}
			<p>
				<span>Email:</span> {userInfo.email}
			</p>
			{userInfo.role == 'trainer' ? (
				<p>
					<span>Specialization:</span> {userInfo.specialization}
				</p>
			) : null}
		</div>
	);
}

export default AccountPage;
