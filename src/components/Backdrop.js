import React from 'react';
import '../css/backdrop.css';

const Backdrop = props => (
	props.open ? <div className="backdrop" onClick={props.click} /> : null
);

export default Backdrop;