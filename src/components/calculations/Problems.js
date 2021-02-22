import React, { useEffect } from 'react';
import Problem from './Problem';

const Problems = ({ numProblems, updateProgress, progress }) => {
	useEffect(() => {
		document.getElementById(1).focus();
	}, []);

	const renderProblems = () => {
		const result = [];
		for (let i = 1; i <= numProblems; i++) {
			result.push(
				<Problem
					key={i}
					id={i}
					updateProgress={updateProgress}
					progress={progress}
				/>
			);
		}
		return result;
	};

	return <div className="problems">{renderProblems()}</div>;
};

export default Problems;
