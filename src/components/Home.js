import '../styles/home.css';
import React, { useEffect } from 'react';

const Home = ({ numProblems, updateNumProblems, startGame }) => {
	useEffect(() => {
		const startGameOnEnterPress = ({ key }) => {
			if (key === 'Enter') startGame();
		};

		document.addEventListener('keyup', startGameOnEnterPress);

		return () => {
			document.removeEventListener('keyup', startGameOnEnterPress);
		};
	}, []);

	return (
		<div className="screen centered">
			<div className="controls">
				<h3>Number of Problems:</h3>
				<input
					className="number-input"
					type="number"
					step="1"
					value={numProblems}
					onChange={e => updateNumProblems(+e.target.value)}
					autoFocus
				></input>
				<button className="btn" onClick={startGame}>
					START
				</button>
			</div>
		</div>
	);
};

export default Home;
