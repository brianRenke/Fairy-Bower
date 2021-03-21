import React from 'react';
import Backdrop from './Backdrop';
import '../css/sideDrawer.css';
import { Link } from 'react-router-dom';

const SideDrawer = props => {
		let drawerClasses = 'side-drawer close';
		if (props.open) {
			drawerClasses = 'side-drawer open';
		}
	return (
		<div>
			<Backdrop show={props.open} click={props.closed}/>
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
		</div>
	);
}

export default SideDrawer
