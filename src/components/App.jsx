import Profile from './Profile';
import React, { Component } from 'react';
import user from '../json/user.json';

class App extends Component {
  render() {
    return (
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
    );
  }
}

export default App;
