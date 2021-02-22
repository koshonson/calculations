import React, { useEffect } from 'react';
import Problem from './Problem';

const Problems = ({ problems, updateProgress, progress }) => {
	useEffect(() => {
		document.getElementById(1).focus();
	}, []);

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

	return <div className="problems">{renderProblems()}</div>;
};

export default Problems;
