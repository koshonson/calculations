import '../../styles/calculations.css';
import React from 'react';
import Problems from './Problems';
import Progress from './Progress';
import Timer from './Timer';

const Caulculations = ({ numProblems }) => {
	return (
		<div className="screen centered">
			<div className="calculations-board">
				<Problems numProblems={numProblems} />
				<div className="status-ribbon">
					<Progress />
					<Timer />
				</div>
			</div>
		</div>
	);
};

export default Caulculations;
