import React from 'react';

const Progress = ({ progress }) => {
	const { count, done, correct, wrong } = progress;

	return (
		<div className="progress">
			<div className="progress-counter">
				{done}/{count}
			</div>
			<div className="progress-stats">
				<div className="progress-item">
					<div className="green-text">✔ Correct: {correct}</div>
				</div>
				<div className="progress-item">
					<div className="red-text">✖ Incorrect: {wrong}</div>
				</div>
			</div>
		</div>
	);
};

export default Progress;
