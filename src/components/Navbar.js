import '../styles/navbar.css';
import React from 'react';

const Navbar = ({ activeScreen, switchScreen }) => {
	const buildClassnames = screen => {
		return ` ${activeScreen === screen ? 'menu-item-active' : ''}`;
	};

	return (
		<nav className="menu">
			<div
				className={`menu-item${buildClassnames('home')}`}
				onClick={() => switchScreen('home')}
			>
				HOME
			</div>
			<div className={`menu-item-dead${buildClassnames('calculations')}`}>
				CALCULATIONS
			</div>
		</nav>
	);
};

export default Navbar;
