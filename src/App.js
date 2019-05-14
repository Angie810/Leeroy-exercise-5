import React, { Component } from 'react';
import Home from './Home';
import './App.css';
import {Switch, Route, Link} from 'react-router-dom';
import Company from './Company';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="Header">
      <h1>Hello Users!</h1>
      </div>
      <div className="Menu">
      <Link to="/"> <button class="button">Home</button></Link>
      <Link to="/Company"> <button class="button">Companies</button></Link>
      
      </div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Company" component={Company}/>
        
      </Switch>
      </div>
      
    );
  }
}
export default App;
