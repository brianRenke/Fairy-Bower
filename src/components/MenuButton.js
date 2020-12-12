import React from 'react';
import '../css/menuButton.css';

const MenuButton = props => (
	<button className="menu-button" onClick={props.click}>
		<div className="nav-icon">
    		<svg width="18" height="11" viewBox="0 0 18 11">
      			<path fill="" fill-rule="evenodd" d="M0,10 L18,10 L18,11 L0,11 L0,10 Z M0,5 L18,5 L18,6 L0,6 L0,5 Z M0,0 L18,0 L18,1 L0,1 L0,0 Z"></path>
      		</svg>
    	</div>
	</button>
);

export default MenuButton;