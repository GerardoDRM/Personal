import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
// import ExperienceCard from './ExperienceCard';

class Resume extends Component {

  render() {
    const {resume} = this.props
    return (<div className="resume">
      <div>
        <h2>About me</h2>
        <p>
          {resume.bio}
        </p>
      </div>
      <div>
        <h2>Work Experience</h2>
        {/*experience.map(e => (<ExperienceCard/>))*/}
      </div>
      <div>
        <h2>Projects</h2>
        {/*projects.map(e => (<ProjectsCard/>))*/}
      </div>
      <div>
        <h2>Skills</h2>
        {/*Skills.map(e => (<div/>))*/}
      </div>
    </div>)
  }
}
export default Resume;
