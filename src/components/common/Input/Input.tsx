import React, { ChangeEvent } from 'react';
import './input.scss';

interface InputProps {
	type?: string;
	placeholder: string;
	val: string;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
	name: string;
	styles?: object;
}

function Input(props: InputProps) {
	return (
		<input
			className='default-input'
			type={props.type ?? 'text'}
			placeholder={props.placeholder}
			value={props.val}
			onChange={props.handleChange}
			name={props.name}
			style={props.styles}
		/>
	);
}

export default Input;
