import React from 'react';
import feedMobile from '../assets/images/feed-mobile.mp4'
import { Link } from 'react-router-dom';

function Home() {
	return (
	    <div className="main">
		    <div className="row">
		      	<div className="col-sm col-md-8">
		        	<h1>Product design</h1>
		    	  	<p class="body-large">We work with people to build simple, beautiful and intelligent product solutions to complex problems.</p>
		        	<Link to="/work" class="primary-button">View Work</Link>
		      	</div>
			    <div className="col-sm col-md-4">
			        <div className="rectangle shadow">
			          	<div className="screen">
			            	<video autoPlay loop muted playsInline src={feedMobile} type="video/mp4"></video>
			          	</div>
			        </div>
			    </div>
		    </div>
		    <div className="row">
		      	<div className="col-sm col-md-6">
		        	<h1>Understanding People</h1>
		        	<p class="body-large">You cannot understand good design if you do not understand people.</p>
		      	</div>
		    </div>
		</div>
	);
}

export default Home;