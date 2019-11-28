import React from 'react';
import '../css/sideDrawer.css';
import { Link } from 'react-router-dom';

const SideDrawer = props => {
		let drawerClasses = 'side-drawer';
		if (props.show) {
			drawerClasses = 'side-drawer open';
		}
	return (
		<nav className={drawerClasses}>
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
		</nav>
	);
}

export default SideDrawer
