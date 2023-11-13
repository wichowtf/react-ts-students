import React from 'react';

import './blog-card.scss';
import blogImg from '../../assets/images/blog/blog1.png';

function BlogCard() {
	return (
		<div className='card-container'>
			<img src={blogImg} alt='Blog 1' />
			<div className='blog-info'>
				<p className='blog-subtitle'>Blog subtitle</p>
				<p className='blog-title'>Blog Title</p>
			</div>
		</div>
	);
}

export default BlogCard;
