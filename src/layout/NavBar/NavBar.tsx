import React from 'react';

import './nav-bar.scss';

interface SidebarProps {
	isOpen: boolean;
	onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
	return (
		<div className={`sidebar ${isOpen ? 'open' : ''}`}>
			<button className='close-button' onClick={onClose}>
				&times;
			</button>
			<ul>
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</ul>
		</div>
	);
};

export default Sidebar;
