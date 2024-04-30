import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Profile.module.css';

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
      <div className={css.profile}>
        <div className={css.description}>
          <img src={this.avatar} alt={this.username} className={css.avatar} />
          <p className={css.name}>{this.username}</p>
          <p className={css.tag}>@{this.tag}</p>
          <p className={css.location}>{this.location}</p>
        </div>

        <ul className={css.stats}>
          {Object.entries(this.stats).map(([key, value]) => (
            <li className={css.stats_item}>
              <span className={css.label}>{key}</span>
              <span className={css.quantity}>{value}</span>
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
