import '../../styles/progress.css';
import React from 'react';

const Progress = ({ progress }) => {
	const { count, done, correct, wrong } = progress;

	const addClassnamesWhenDone = classname => {
		return done === count ? classname : '';
	};

	return (
		<div className={`progress ${addClassnamesWhenDone('final')}`}>
			<div className={`progress-counter ${addClassnamesWhenDone('hide')}`}>
				{done}/{count}
			</div>
			<div className={`progress-stats ${addClassnamesWhenDone('final')}`}>
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
