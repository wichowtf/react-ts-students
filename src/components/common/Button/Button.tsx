import React, { MouseEventHandler } from 'react';

/* import './Button.css'; */

interface ButtonProps {
	type?: boolean;
	clicHandle?: MouseEventHandler;
	disabled?: boolean;
	buttonText: string;
}

function Button(props: ButtonProps) {
	return (
		<button
			className={props.type ? 'purple-btn' : 'white-btn'}
			onClick={props.clicHandle}
			disabled={props.disabled}
		>
			{props.buttonText}
		</button>
	);
}

export default Button;
