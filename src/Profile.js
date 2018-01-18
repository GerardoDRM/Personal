import React, {Component, PropTypes} from 'react';
import BasicInfo from './BasicInfo';
import Resume from './Resume';
import { Link } from 'react-router-dom';

class Profile extends Component {

  render() {
    const {personal, resume} = this.props;
    return (
      <div>
        <BasicInfo personal={personal}/>
        <Resume resume={resume}/>
      </div>
    )
  }
}
module.exports = Profile;
