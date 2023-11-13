import React from 'react';

import BlogCard from 'src/components/BlogCard/BlogCard';

/* import blogBody from '../../assets/images/blog/blogPage.png'; */

function BlogPage() {
	return (
		<div className='card-container'>
			<BlogCard />
			{/* <img src={blogBody} alt='Blog Body' /> */}
		</div>
	);
}

export default BlogPage;
