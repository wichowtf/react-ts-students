import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import RegistrationForm from 'src/components/RegistrationForm/RegistrationForm';

function Registration() {
	const parms = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (parms.role !== 'student' && parms.role !== 'trainer') {
			navigate('registration/student', { replace: true });
		}
	}, []);

	return <div>{parms.role && <RegistrationForm role={parms.role} />}</div>;
}

export default Registration;
