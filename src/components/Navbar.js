import React from 'react';
import MenuButton from './MenuButton';
import '../css/navbar.css';

const Navbar = props => (
	<header>
		<nav className="navbar_navigation row middle-xs">
			<div className="navbar_navigation-logo col-xs-6">
				<div className="navbar_logo"><a href="/">Fairy Bower</a></div>
				<div className="navbar_icon">
					<svg width="24px" height="24px" viewBox="0 0 24 24">
	    				<path id="path_1" fill="" fill-rule="evenodd" d="M12,0 C18.6273103,0 24,5.37227587 24,12 C24,18.6273103 18.6273103,24 12,24 C5.37227587,24 0,18.6273103 0,12 C0,5.37227587 5.37227587,0 12,0 Z M12.0002086,4.48 C7.84692758,4.48 4.48,7.84683421 4.48,12 C4.48,16.1531658 7.84692758,19.52 12.0002086,19.52 C16.1534896,19.52 19.52,16.1531658 19.52,12 C19.52,7.84683421 16.1534896,4.48 12.0002086,4.48 Z"></path>
	    				<path id="path_2" fill="" fill-rule="evenodd" d="M12.0002058,5.44 C8.37723357,5.44 5.44,8.37691411 5.44,12 C5.44,15.6230859 8.37723357,18.56 12.0002058,18.56 C15.623178,18.56 18.56,15.6230859 18.56,12 C18.56,8.37691411 15.623178,5.44 12.0002058,5.44"></path>
					</svg>
				</div>
			</div>
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