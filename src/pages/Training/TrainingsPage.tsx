import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrainingsAction } from 'src/store/trainings/actions';

import './trainings.scss';

interface accountPageProps {
	loggedUser: { token: string; email: string };
}
interface training {
	description: string;
	duration: number;
	id: string;
	name: string;
	studentEmail: string;
	trainerEmail: string;
}

interface storedTr {
	trainings: {
		trainings: training[];
	};
}

function TrainingPage({ loggedUser }: accountPageProps) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const dispatch = useDispatch<any>();
	const trainingsList = useSelector(
		(state: storedTr) => state.trainings.trainings
	);
	console.log('tr', loggedUser);

	useEffect(() => {
		dispatch(getTrainingsAction(loggedUser));
	}, []);
	return (
		<div className='tr-container'>
			<p className='trainings-title'>Trainings</p>
			{trainingsList.map((training: training, index: number) => {
				return (
					<div key={training.id + index}>
						{training.name}: {training.description}
					</div>
				);
			})}
		</div>
	);
}

export default TrainingPage;
