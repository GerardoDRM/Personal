import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import ExperienceCard from './ExperienceCard';

class Resume extends Component {

  render() {
    const {experience, projects, skills, bio}
    return (<div>
      <div>
        <h2>About me</h2>
        <p>
          {bio}
        </p>
      </div>
      <div>
        <h2>Work Experience</h2>
        {experience.map(e => (<ExperienceCard/>))}
      </div>
      <div>
        <h2>Projects</h2>
        {projects.map(e => (<ProjectsCard/>))}
      </div>
      <div>
        <h2>Skills</h2>
        {Skills.map(e => (<div/>))}
      </div>
    </div>)
  }
}
module.exports = Resume;
