import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Navbar from '../NavBar/NavBar';
import Button from 'src/components/common/Button/Button';

import './header.scss';
import logo from '../../assets/images/Logo.png';
import { useNavigate, Link } from 'react-router-dom';

interface storedUser {
	auth: {
		user: {
			token: string;
			email: string;
		};
	};
}

function Header() {
	const [isSidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen);
	};

	const isLogged = useSelector((state: storedUser) => state.auth.user);
	const navigate = useNavigate();

	function goToLogin() {
		navigate('login');
	}

	function goToReg() {
		navigate('registration');
	}

	return (
		<div className='containerH'>
			<div className='menu-logo-header'>
				<img src={logo} alt='img' className='logoH' />
				<nav className='nav-options'>
					<ul className='menuH'>
						<li>
							<Link to='blog'>Blog</Link>
						</li>
						<li>Pricing</li>
						<li>About Us</li>
					</ul>
				</nav>
			</div>
			{/* <button onClick={toggleSidebar}>Buttons</button> */}
			{isLogged ? (
				<Button
					buttonText='Menu'
					type={false}
					disabled={false}
					clicHandle={toggleSidebar}
					styles={{ width: '60px !important' }}
				/>
			) : (
				<div className='authButtons'>
					<Button
						buttonText='Sign In'
						type={false}
						disabled={false}
						clicHandle={goToReg}
						styles={{ width: '60px !important' }}
					/>
					<Button
						buttonText='Login'
						type={false}
						disabled={false}
						clicHandle={goToLogin}
						styles={{ width: '60px !important' }}
					/>
				</div>
			)}
			<Navbar isOpen={isSidebarOpen} onClose={toggleSidebar} />
		</div>
	);
}

export default Header;
