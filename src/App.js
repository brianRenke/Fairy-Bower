import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  menuButtonClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="app">
        <Navbar sideDrawerClickHandler={this.menuButtonClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <div className="main">
          <div className="row">
            <div className="col-xs center-xs">
              <h1>User Friendly Design</h1>
          	  <p class="body-large">We work with people to build simple, beautiful and intelligent product solutions to complex problems.</p>
              <a href="#" class="primary-button">View Work</a>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6">
              <h2>Understanding People</h2>
              <p class="body-large">You cannot understand good design if you do not understand people.</p>
            </div>
            <div className="rectangle shadow">
              <div className="screen">
                <video autoPlay loop muted src="https://d2rt221h1bct42.cloudfront.net/video2.mp4" type="video/mp4"></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
