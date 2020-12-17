import React from 'react';

function Home() {
	return (
	    <div className="main">
		    <div className="row">
		      	<div className="col-sm col-md-8">
		        	<h1>Product design</h1>
		    	  	<p class="body-large">We work with people to build simple, beautiful and intelligent product solutions to complex problems.</p>
		        	<a href="/work" class="primary-button">View Work</a>
		      	</div>
			    <div className="col-sm col-md-4">
			        <div className="rectangle shadow">
			          	<div className="screen">
			            	<video autoPlay loop muted src="https://d14q3brotd9flp.cloudfront.net/static/images/feed-mobile.mp4" type="video/mp4"></video>
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