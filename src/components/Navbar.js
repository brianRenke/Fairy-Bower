import React from 'react';
import MenuButton from './MenuButton';
import NavLink from './NavLink';
import Icon from './Icon';
import '../css/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = props => (
	<header>
		<nav className="navbar row middle-xs">
			<div className="logo col-xs-6">
				<div><Link to="/">Brian Renke</Link></div>
				<Icon />
			</div>
			<div className="links col-xs-6">
				<MenuButton click={props.sideDrawerClick} />
				<ul>
					<NavLink link="/about">About</NavLink>
					<NavLink link="/work">Work</NavLink>
					<NavLink link="/contact">Contact</NavLink>
				</ul>
			</div>
		</nav>
	</header>
);

export default Navbar;