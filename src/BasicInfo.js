import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from './ProfileImage';

class BasicInfo extends Component {

  render() {
    const {profile} = this.props;
    return (
      <div>
        <h1>{profile.name}</h1>
        <ProfileImage img={profile.img}/>
        <p>Message</p>
        <div>
          {profile.social.map(s => (<img src="" />))}
        </div>
      </div>
    )
  }
}
module.exports = BasicInfo;
