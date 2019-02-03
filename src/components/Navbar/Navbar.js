import React from 'react';
import MenuButton from '../SideDrawer/MenuButton';
import '../../css/navbar.css';

const Navbar = props => (
	<header>
		<nav className="navbar_navigation row middle-xs">
			<div className="navbar_logo col-xs-6"><a href="/">Fairy Bower</a></div>
			<div className="navbar_navigation-links col-xs-6">
				<MenuButton click={props.sideDrawerClickHandler} />
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