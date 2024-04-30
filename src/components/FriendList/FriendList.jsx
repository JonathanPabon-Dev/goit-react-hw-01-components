import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

class FriendList extends Component {
  constructor(props) {
    super(props);
    this.friends = this.props.friends;
  }

  render() {
    return (
      <section className={css.friends}>
        <ul className={css.friendList}>
          {this.friends.map(friend => (
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          ))}
        </ul>
      </section>
    );
  }
}

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
