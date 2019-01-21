import React from 'react';
import '../../css/navbar.css';

const Navbar = props => (
	<header className="navbar">
		<nav className="navbar_navigation row middle-xs">
			<div className="navbar_logo"><a href="/">Fairy Bower</a></div>
			<div className="spacer" />
			<div className="navbar_navigation-links">
				<ul>
					<li><a href="/">About</a></li>
					<li><a href="/">Work</a></li>
					<li><a href="/">Contact</a></li>
				</ul>
			</div>
		</nav>
	</header>
);

export default Navbar;