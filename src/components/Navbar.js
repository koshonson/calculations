import React from 'react';

const Navbar = ({ activeScreen, switchScreen }) => {
	const buildClassnames = screen => {
		return `menu-item ${
			activeScreen === screen ? 'menu-item-active' : ''
		}`.trim();
	};

	return (
		<nav className="menu">
			<div
				className={buildClassnames('home')}
				onClick={() => switchScreen('home')}
			>
				HOME
			</div>
			<div
				className={buildClassnames('calculations')}
				onClick={() => switchScreen('calculations')}
			>
				CALCULATIONS
			</div>
		</nav>
	);
};

export default Navbar;
