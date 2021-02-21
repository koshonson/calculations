import '../styles/calculations.css';
import React from 'react';

const Caulculations = ({ numProblems }) => {
	const renderProblems = () => {
		const result = [];
		for (let i = 1; i <= numProblems; i++) {
			result.push(
				<div className="problem" key={i}>
					81 / 9 = 9
				</div>
			);
		}
		return result;
	};

	return (
		<div className="screen">
			<div className="calculations-board">
				<div className="problems">{renderProblems()}</div>
				<div className="status-ribbon">
					<div className="progress">PROGERSS</div>
					<div className="timer">TIMER</div>
				</div>
			</div>
		</div>
	);
};

export default Caulculations;
