import '../styles/main.css';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Calculations from './calculations/Calculations';

const App = () => {
	const [activeScreen, setActiveScreen] = useState('home');
	const [numProblems, setNumProblems] = useState(20);

	const updateNumProblems = num => {
		if (num < 20) setNumProblems(20);
		if (num >= 20 && num <= 60) setNumProblems(num);
		if (num > 60) setNumProblems(60);
	};

	const renderScreen = activeScreen => {
		switch (activeScreen) {
			case 'home':
				return (
					<Home
						numProblems={numProblems}
						updateNumProblems={updateNumProblems}
						startGame={() => setActiveScreen('calculations')}
					/>
				);
			case 'calculations':
				return <Calculations numProblems={numProblems} />;
			default:
				return null;
		}
	};

	return (
		<>
			<Navbar switchScreen={setActiveScreen} activeScreen={activeScreen} />
			{renderScreen(activeScreen)}
		</>
	);
};

export default App;
