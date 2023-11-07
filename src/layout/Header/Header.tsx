import React, { useState } from 'react';

import Navbar from '../NavBar/NavBar';

import './header.scss';
import logo from '../../assets/images/Logo.png';

function Header() {
	const [isSidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen);
	};

	return (
		<div className='containerH'>
			<div className='menu-logo-header'>
				<img src={logo} alt='img' className='logoH' />
				<nav className='nav-options'>
					<ul className='menuH'>
						<li>Blog</li>
						<li>Pricing</li>
						<li>About Us</li>
					</ul>
				</nav>
			</div>
			<button onClick={toggleSidebar}>Buttons</button>
			<Navbar isOpen={isSidebarOpen} onClose={toggleSidebar} />
		</div>
	);
}

export default Header;
