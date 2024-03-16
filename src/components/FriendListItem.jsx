import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FriendListItem extends Component {
  constructor(props) {
    super(props);
    this.avatar = this.props.avatar;
    this.name = this.props.name;
    this.isOnline = this.props.isOnline;
  }

  render() {
    return (
      <div>
        <li className="item">
          <span className="status"></span>
          <img
            className="avatar"
            src={this.avatar}
            alt={this.name + ' avatar'}
            width="48"
          />
          <p className="name">{this.name}</p>
        </li>
      </div>
    );
  }
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
