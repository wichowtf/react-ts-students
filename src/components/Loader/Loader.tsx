import React from 'react';
import './loader.scss'; // Asegúrate de tener un archivo CSS asociado para estilos

interface LoadingProps {
	active: boolean;
	message?: string;
}

const Loading: React.FC<LoadingProps> = ({
	active,
	message = 'Loading...',
}) => {
	return active ? (
		<div className='loading-overlay'>
			<div className='loading-container'>
				<div className='spinner'></div>
				<p className='loading-message'>{message}</p>
			</div>
		</div>
	) : null;
};

export default Loading;
