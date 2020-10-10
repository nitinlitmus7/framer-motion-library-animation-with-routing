import React from 'react';
import logo from './logo.svg';
import { AnimatePresence } from "framer-motion";
import './App.css';
import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Messages from './pages/Message';

class App extends React.Component {
  
  render() {
    var currentLocation = window.location.pathname;
    
    return (
    <div className="App">
       <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        
        <div className="menu">
            <ul>
              <li> <Link to="/">Home</Link> </li>
              <li> <Link to="/messages">Messages</Link> </li>
              <li> <Link to="/about">About</Link> </li>
            </ul>
        </div>
        <div className="App-intro">
        <AnimatePresence exitBeforeEnter >
          <Switch location={this.props.location} key={currentLocation.pathname}>
            <Route exact path="/"  component={Home} />
            <Route path="/messages" component={Messages} />
            <Route path="/about" component={About} />
            <Redirect to="/" />
          </Switch>
          </AnimatePresence>
        </div>
        </header>
      </div>
  );
}
}
export default App;
