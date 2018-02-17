import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';


class Resume extends Component {


  randomBackground = () => {
    const colors = ["#880E4F", "#880E4F", "#304FFE", "#2962FF", "#FFAB00"]
    return {
      backgroundColor: colors[Math.floor(Math.random()*colors.length)]
    }
  }

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
        {
          resume.work.map(e => (<div>
            <img src=""/>
            <div>
              <h2>{e.company}</h2>
              <h4>{e.position}</h4>
            </div>
          </div>))
        }
      </div>
      <div>
        <h2>Projects</h2>
        {
          resume.projects.map(e => (<div>
            <img src=""/>
            <div>
              <h2>{e.name}</h2>
              <h4>{e.time}</h4>
              <p>{e.description}</p>
            </div>
          </div>))
        }
      </div>
      <div>
        <h2>Skills</h2>
        <div className="chips-container">
          {
            resume.skills.map(e => (<div className="chips" style={this.randomBackground()}>
              {e.title}
            </div>))
          }
        </div>
      </div>
    </div>)
  }
}
export default Resume;
