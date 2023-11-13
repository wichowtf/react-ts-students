import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import RegistrationForm from 'src/components/RegistrationForm/RegistrationForm';
import Loading from 'src/components/Loader/Loader';

import './register-page.scss';
import studentImg from '../../assets/images/register/student.png';
import trainerImg from '../../assets/images/register/trainer.png';

interface loaderProps {
	loader: boolean;
}

function Registration({ loader }: loaderProps) {
	const parms = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (parms.role !== 'student' && parms.role !== 'trainer') {
			navigate('registration/student', { replace: true });
		}
	}, []);

	return (
		<div className='container'>
			<Loading active={loader} />
			<div className='centered-container'>
				<p className='title-reg'>Registration</p>
				<p className='subtitle-reg'>
					{parms.role == 'student' ? 'Student' : 'Trainer'}
				</p>
				<div className='form-img-container'>
					<img
						src={parms.role == 'student' ? studentImg : trainerImg}
						alt={parms.role + 'image'}
						style={{ marginRight: '32px' }}
					/>
					<RegistrationForm role={parms.role} />
				</div>
			</div>
		</div>
	);
}

export default Registration;
