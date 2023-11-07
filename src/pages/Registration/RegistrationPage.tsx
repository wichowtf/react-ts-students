import React from 'react';
import { useParams } from 'react-router-dom';

import RegistrationForm from 'src/components/RegistrationForm/RegistrationForm';

function Registration() {
	const parms = useParams();
	console.log(parms);
	return (
		<div>
			registrationPage
			<RegistrationForm />
		</div>
	);
}

export default Registration;
