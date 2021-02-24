import '../../styles/calculations.css';
import React, { useState, useEffect } from 'react';
import Problem from './Problem';
import Progress from './Progress';
import Timer from './Timer';
import { ProblemCaster } from '../../utils/ProblemCaster';

const Calculations = ({ numProblems }) => {
	const [problems] = useState(ProblemCaster.castFormatedProblems(numProblems));
	const [progress, setProgress] = useState({
		count: numProblems,
		done: 0,
		correct: 0,
		wrong: 0
	});

	useEffect(() => {
		document.getElementById(1).focus();
	}, []);

	const updateProgress = result => {
		const update = { ...progress };
		update.done++;
		result ? update.correct++ : update.wrong++;
		setProgress(update);
	};

	const renderProblems = () => {
		return problems.map((problem, i) => {
			const { expression, result: _result } = problem;
			return (
				<Problem
					key={i + 1}
					id={i + 1}
					expression={expression}
					result={_result}
					updateProgress={updateProgress}
					progress={progress}
				/>
			);
		});
	};

	return (
		<div className="screen centered">
			<div className="calculations-board">
				<div className="problems">{renderProblems()}</div>
				<div className="status-ribbon">
					<Progress progress={progress} />
					<Timer progress={progress} />
				</div>
			</div>
		</div>
	);
};

export default Calculations;
