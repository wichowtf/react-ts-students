import React, { MouseEventHandler } from 'react';

import './button.scss';

interface ButtonProps {
	type?: boolean;
	clicHandle?: MouseEventHandler;
	disabled?: boolean;
	buttonText: string;
	styles?: object;
}

function Button(props: ButtonProps) {
	return (
		<button
			className={props.type ? 'default-button' : 'default-button'}
			onClick={props.clicHandle}
			disabled={props.disabled}
			style={props.styles}
		>
			{props.buttonText}
		</button>
	);
}

export default Button;
