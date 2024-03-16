import Profile from './Profile';
import Statistics from './Statistics';
import React, { Component } from 'react';
import user from '../json/user.json';
import data from '../json/data.json';

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
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>
    );
  }
}

export default App;
