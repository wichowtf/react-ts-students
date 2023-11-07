import React /* , { useState } */ from 'react';
import { Outlet } from 'react-router';

import Header from './Header/Header';
import Footer from './Footer/Footer';
/* import Navbar from './NavBar/NavBar'; */

import './layout.scss';

function Layout() {
	return (
		<div>
			<Header />
			<div className='content-container'>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}

export default Layout;
