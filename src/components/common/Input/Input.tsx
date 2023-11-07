import React, { ChangeEvent } from 'react';

interface InputProps {
	type?: string;
	placeholder: string;
	val: string;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
	name: string;
}

function Input(props: InputProps) {
	return (
		<input
			type={props.type ?? 'text'}
			placeholder={props.placeholder}
			value={props.val}
			onChange={props.handleChange}
			name={props.name}
		/>
	);
}

export default Input;
