import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

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
        <li className={css.item}>
          <span
            className={css.status}
            style={
              this.isOnline
                ? { backgroundColor: '#44B24A' }
                : { backgroundColor: '#FF4E58' }
            }
          ></span>
          <img
            className={css.avatar}
            src={this.avatar}
            alt={this.name + ' avatar'}
            width="48"
          />
          <p className={css.name}>{this.name}</p>
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
