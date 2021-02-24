import '../styles/home.css';
import React, { useEffect } from 'react';
import { VscSymbolOperator } from 'react-icons/vsc';

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
				<VscSymbolOperator className="home-icon" />
				<h3>Number of Problems:</h3>
				<div className="number-input-container">
					<button
						className="btn-input rounded-left"
						onClick={() => updateNumProblems(numProblems - 1)}
					>
						-
					</button>
					<input
						className="number-input"
						type="number"
						step="1"
						value={numProblems}
						onChange={e => updateNumProblems(+e.target.value)}
						autoFocus
					></input>
					<button
						className="btn-input rounded-right"
						onClick={() => updateNumProblems(numProblems + 1)}
					>
						+
					</button>
				</div>
				<button className="btn" onClick={startGame}>
					START
				</button>
			</div>
		</div>
	);
};

export default Home;
