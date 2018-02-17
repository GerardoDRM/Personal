import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Profile from './Profile';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profile: {},
      resume: {
        "bio": "Enthusiastic Full Stack and Android developer specialist with expertise in problem solving to provide optimized database models, exceptional Restful services, optimized request on front-end, adaptive applications and excellent mobile apps integrations. Current work includes managing back-end processes. Passionate about emerging technology, machine learning, computer vision, distributed systems and databases. Enjoys collaborative teamwork and leadership coaching.",
        "work": [
          {
            "company": "Lyft",
            "position": "Software Engineer",
            "company-logo": ""
          }, {
            "company": "Craft Code (MX)",
            "position": "Full Stack web developer and Android developer (Entrepeneur)",
            "company-logo": ""
          }, {
            "company": "Kimetrics",
            "position": "Software Engineer",
            "company-logo": ""
          }, {
            "company": "Bondzu",
            "position": "Full Stack web developer and Android developer",
            "company-logo": ""
          }
        ],
        "projects": [
          {
            "name": "Urbn Taste",
            "time": "May 2016 - May 2017",
            "logo": "",
            "description": ""
          }, {
            "name": "Social Click",
            "time": "Oct 2016 - Oct 2017",
            "logo": "",
            "description": ""
          }, {
            "name": "Augmented Reality Framework using Cloud Computing and Object Detection",
            "time": "Sep 2014 - Apr 2015",
            "logo": "",
            "description": ""
          }
        ],
        "skills": [
          {
            "title": "Python"
          }, {
            "title": "SQL"
          }, {
            "title": "Javascript"
          }, {
            "title": "ReactJS"
          }, {
            "title": "AngularJS"
          }, {
            "title": "NodeJS"
          }, {
            "title": "NoSQL"
          }, {
            "title": "MongoDB"
          }, {
            "title": "Postgres"
          }, {
            "title": "Readshift"
          }, {
            "title": "Hadoop"
          }
        ]
      }
    };
  }

  render() {
    return (<div className="App">
      <Route exact="exact" path='/' render={() => (<Profile {...this.state}/>)}/>
    </div>);
  }
}

export default App;
