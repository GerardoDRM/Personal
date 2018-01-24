import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Profile from './Profile';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      resume: {
        "bio": "Enthusiastic Full Stack and Android developer specialist with expertise in problem solving to provide optimized database models, exceptional Restful services, optimized request on front-end, adaptive applications and excellent mobile apps integrations. Current work includes managing back-end processes. Passionate about emerging technology, machine learning, computer vision, distributed systems and databases. Enjoys collaborative teamwork and leadership coaching."
      }
    };
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <Profile {...this.state} />
        )}/>
      </div>
    );
  }
}

export default App;
