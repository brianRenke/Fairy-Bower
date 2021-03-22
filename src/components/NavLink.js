import React from 'react';
import '../css/navLink.css';
import { Link } from 'react-router-dom';

const NavLink = (props) => (
	<Link to={props.link} onClick={props.click}>
		<li className="navlink">{props.children}</li>
	</Link>
);


export default NavLink;