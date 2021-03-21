import React, { Component } from 'react';
import Navbar from './components/Navbar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  menuButtonClick = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  sideDrawerClose = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          <Navbar sideDrawerClick={this.menuButtonClick} />
          <SideDrawer open={this.state.sideDrawerOpen} closed={this.sideDrawerClose} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
