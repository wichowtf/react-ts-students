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
					<div className='col-footer'>
						<p className='col-title'>Product</p>
						<ul className='col-item'>
							<li>Features</li>
							<li>Pricing</li>
						</ul>
					</div>
					<div className='col-footer'>
						<p className='col-title'>Resourses</p>
						<ul className='col-item'>
							<li>Blog</li>
							<li>Webinar</li>
						</ul>
					</div>
					<div className='col-footer'>
						<p className='col-title'>Company</p>
						<ul className='col-item'>
							<li>About us</li>
							<li>Contact us</li>
						</ul>
					</div>
					<div className='col-footer'>
						<p className='col-title'>Product</p>
						<ul className='col-item'>
							<li>Features</li>
							<li>Pricing</li>
						</ul>
					</div>
				</nav>
			</div>
			<div className='socond-menu'></div>
		</div>
	);
}

export default Footer;
