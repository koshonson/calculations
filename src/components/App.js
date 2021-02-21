import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Calculations from './Calculations';

const App = () => {
	const [activeScreen, setActiveScreen] = useState('home');

	const renderScreen = activeScreen => {
		switch (activeScreen) {
			case 'home':
				return <Home />;
			case 'calculations':
				return <Calculations />;
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
