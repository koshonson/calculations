import React from 'react';
import Problem from './Problem';

const Problems = ({ numProblems }) => {
	const renderProblems = () => {
		const result = [];
		for (let i = 1; i <= numProblems; i++) {
			result.push(<Problem key={i} />);
		}
		return result;
	};

	return <div className="problems">{renderProblems()}</div>;
};

export default Problems;
