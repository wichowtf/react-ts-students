import React from 'react';
import { /* Link, */ useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleLogout } from 'src/store/auth/actions';

import Button from 'src/components/common/Button/Button';

import './nav-bar.scss';

interface SidebarProps {
	isOpen: boolean;
	onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
	const navigate = useNavigate();
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const dispatch = useDispatch<any>();

	function gotoAccount() {
		navigate('account');
		onClose();
	}

	function logout() {
		dispatch(handleLogout());
		navigate('login');
		onClose();
	}
	return (
		<div className={`sidebar ${isOpen ? 'open' : ''}`}>
			{/* <button className='close-button' onClick={onClose}>
				&times;
			</button> */}
			<Button
				buttonText='Close'
				type={true}
				disabled={false}
				clicHandle={onClose}
				styles={{
					width: '60px !important',
					position: 'absolute',
					top: '10px',
					right: '10px',
				}}
			/>
			<ul>
				<li>
					<Button
						buttonText='Account'
						type={false}
						disabled={false}
						clicHandle={gotoAccount}
						styles={{ width: '60px !important' }}
					/>
				</li>
				<li>
					<Button
						buttonText='Logout'
						type={false}
						disabled={false}
						clicHandle={logout}
						styles={{ width: '60px !important' }}
					/>
				</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</ul>
		</div>
	);
};

export default Sidebar;
