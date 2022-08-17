import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Education from './pages/Education';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';

export default class App extends Component {
  render() {
    return (
      <div>
        <AboutMe />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <NavBar />
      </div>
    );
  }
}
