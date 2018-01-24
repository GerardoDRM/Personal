import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router-dom';

class ProfileImage extends Component {

  render() {
    const {img} = this.props;
    return (
      <div>
        <img src={img}/>
      </div>
    )
  }
}
export default ProfileImage;
