import React from 'react';
import MenuButton from './MenuButton';
import NavbarIcon from './NavbarIcon'
import '../css/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = props => (
	<header>
		<nav className="navbar_navigation row middle-xs">
			<div className="navbar_navigation-logo col-xs-6">
				<div className="navbar_logo"><Link to="/">Brian Renke</Link></div>
				<NavbarIcon />
			</div>
			<div className="navbar_navigation-links col-xs-6">
				<MenuButton click={props.sideDrawerClick} />
				<ul>
					<Link to="/about">
						<li>About</li>
					</Link>
					<Link to="/work">
						<li>Work</li>
					</Link>
					<Link to="/contact">
						<li>Contact</li>
					</Link>
				</ul>
			</div>
		</nav>
	</header>
);

export default Navbar;