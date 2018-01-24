import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router-dom';
import ProfileImage from './ProfileImage';

class BasicInfo extends Component {

  render() {
    const {profile} = this.props;
    return (
      <div>
        <h1></h1>
        <ProfileImage img=""/>
        <p>Message</p>
        <div>
          {/*profile.social.map(s => (<img src="" />))*/}
        </div>
      </div>
    )
  }
}
export default BasicInfo;
