import '../../styles/calculations.css';
import React, { useState, useEffect } from 'react';
import Problems from './Problems';
import Progress from './Progress';
import Timer from './Timer';

const Caulculations = ({ numProblems }) => {
	const [time, setTime] = useState(0);
	const [timer, setTimer] = useState(null);
	const [progress, setProgress] = useState({
		count: numProblems,
		done: 0,
		correct: 0,
		wrong: 0
	});

	useEffect(() => {
		const tickSec = () => setTime(time + 1);
		const { count, done } = progress;
		if (count !== done) {
			setTimer(setTimeout(tickSec, 1000));
		} else {
			clearTimeout(timer);
			setTimer(null);
		}
	}, [time, progress]);

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
					progress={progress}
				/>
				<div className="status-ribbon">
					<Progress progress={progress} />
					<Timer time={time} timer={timer} />
				</div>
			</div>
		</div>
	);
};

export default Caulculations;
