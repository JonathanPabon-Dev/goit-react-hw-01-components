import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

class FriendList extends Component {
  constructor(props) {
    super(props);
    this.friends = this.props.friends;
  }

  render() {
    return (
      <div>
        <ul className="friend-list">
          {this.friends.map(friend => (
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          ))}
        </ul>
      </div>
    );
  }
}

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
