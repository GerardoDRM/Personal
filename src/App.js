import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Profile from './Profile';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <Profile/>
        )}/>
      </div>
    );
  }
}

export default App;
