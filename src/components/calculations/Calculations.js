import '../../styles/calculations.css';
import React, { useState } from 'react';
import Problems from './Problems';
import Progress from './Progress';
import Timer from './Timer';
import { ProblemCaster } from '../../utils/ProblemCaster';

const Caulculations = ({ numProblems }) => {
	const [problems] = useState(ProblemCaster.castFormatedProblems(numProblems));
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
					problems={problems}
					updateProgress={updateProgress}
					progress={progress}
				/>
				<div className="status-ribbon">
					<Progress progress={progress} />
					<Timer progress={progress} />
				</div>
			</div>
		</div>
	);
};

export default Caulculations;
