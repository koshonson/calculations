import React from 'react';

const Progress = () => {
	return (
		<div className="progress">
			<div className="progress-counter">5/20</div>
			<div className="progress-stats">
				<div className="progress-item">
					<div className="progress-item-key">Correct:</div>
					<div className="progress-item-value">2</div>
				</div>
				<div className="progress-item">
					<div className="progress-item-key">Incorrect:</div>
					<div className="progress-item-value">3</div>
				</div>
			</div>
		</div>
	);
};

export default Progress;
