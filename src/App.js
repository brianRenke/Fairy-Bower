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
        <div className="main col-xs center-xs">
          <h1>User Friendly Design</h1>
        	<p class="body-large">We work with people to build simple, beautiful and intelligent product solutions to complex problems.</p>
          <a href="#" class="primary-button">View Work</a>
        </div>
      </div>
    );
  }
}

export default App;
