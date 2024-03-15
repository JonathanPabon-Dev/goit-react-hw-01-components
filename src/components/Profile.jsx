import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.username = this.props.username;
    this.tag = this.props.tag;
    this.location = this.props.location;
    this.avatar = this.props.avatar;
    this.stats = this.props.stats;
  }

  render() {
    return (
      <div className="profile">
        <div className="description">
          <img src={this.avatar} alt={this.username} className="avatar" />
          <p className="name">{this.username}</p>
          <p className="tag">@{this.tag}</p>
          <p className="location">{this.location}</p>
        </div>

        <ul className="stats">
          {Object.entries(this.stats).map(([key, value]) => (
            <li>
              <span className="label">{key}</span>
              <span className="quantity">{value}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
