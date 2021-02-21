import '../styles/main.css';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Calculations from './Calculations';

const App = () => {
	const [activeScreen, setActiveScreen] = useState('home');
	const [numProblems, setNumProblems] = useState(20);

	const renderScreen = activeScreen => {
		switch (activeScreen) {
			case 'home':
				return (
					<Home
						numProblems={numProblems}
						setNumProblems={setNumProblems}
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
