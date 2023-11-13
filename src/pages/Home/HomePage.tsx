import React from 'react';

import './home-page.scss';
import joinUsImg from '../../assets/images/home/join-us.png';

function HomePage() {
	return (
		<div className='home-container'>
			<p className='home-title'>Let's start learning</p>
			<p className='home-subtitle'>
				Welcome to Learn Platform - where every day is a day to learn. Dive into
				the vast ocean of knowledge and empower yourself with the tools for a
				successful tomorrow. Happy learning!
			</p>
			<iframe
				width='957'
				height='540'
				src='https://www.youtube.com/embed/Rh3tobg7hEo?si=U0RvzQuD9DPYjQf7'
				title='YouTube video player'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
			></iframe>
			<img
				src={joinUsImg}
				className='join-us-img'
				style={{ marginBottom: '64px' }}
				alt='Join us image'
			/>
		</div>
	);
}

export default HomePage;
