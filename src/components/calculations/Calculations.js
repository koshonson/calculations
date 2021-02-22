import '../../styles/calculations.css';
import React, { useState } from 'react';
import Problems from './Problems';
import Progress from './Progress';
import Timer from './Timer';

const Caulculations = ({ numProblems }) => {
	const [timer, setTimer] = useState(0);
	const [progress, setProgress] = useState({
		count: numProblems,
		done: 0,
		correct: 0,
		wrong: 0
	});

	const updateProgress = result => {
		const update = { ...progress };
		update.done++;
		result ? update.correct++ : update.wrong++;
		setProgress(update);
	};

	return (
		<div className="screen centered">
			<div className="calculations-board">
				<Problems
					numProblems={numProblems}
					updateProgress={updateProgress}
				/>
				<div className="status-ribbon">
					<Progress progress={progress} />
					<Timer timer={timer} />
				</div>
			</div>
		</div>
	);
};

export default Caulculations;
