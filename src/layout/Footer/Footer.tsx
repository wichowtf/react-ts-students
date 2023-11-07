import React from 'react';

import './footer.scss';
import Logo from '../../assets/images/Logo.png';

function Footer() {
	return (
		<div className='containerF'>
			<div className='main-menu'>
				<div className='col-footer'>
					<img className='logoH' src={Logo} alt='Logo' />
				</div>
				<nav className='footer-nav'>
					<div className='col-footer'>col</div>
					<div className='col-footer'>col</div>
					<div className='col-footer'>col</div>
					<div className='col-footer'>col</div>
				</nav>
			</div>
			<div className='socond-menu'></div>
		</div>
	);
}

export default Footer;
