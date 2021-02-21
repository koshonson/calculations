import '../styles/home.css';
import React from 'react';

const Home = ({ numProblems, setNumProblems, startGame }) => {
	return (
		<div className="screen">
			<div className="controls">
				<h3>Number of Problems:</h3>
				<input
					className="number-input"
					type="number"
					min="20"
					max="60"
					step="1"
					defaultValue={numProblems}
					onChange={e => setNumProblems(e.target.value)}
				></input>
				<button className="btn" onClick={startGame}>
					START
				</button>
			</div>
		</div>
	);
};

export default Home;
