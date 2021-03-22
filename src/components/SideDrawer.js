import React from 'react';
import Backdrop from './Backdrop';
import NavLink from './NavLink';
import '../css/sideDrawer.css';

const SideDrawer = props => {
	let drawerClasses = 'side-drawer close';
	if (props.open) {
		drawerClasses = 'side-drawer open';
	}
	return (
		<div>
			<Backdrop open={props.open} click={props.closed}/>
			<nav className={drawerClasses}>
				<ul>
					<NavLink link="/about" click={props.closed}>About</NavLink>
					<NavLink link="/work" click={props.closed}>Work</NavLink>
					<NavLink link="/contact" click={props.closed}>Contact</NavLink>
				</ul>
			</nav>
		</div>
	);
}

export default SideDrawer;
