import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.title = this.props.title;
    this.stats = this.props.stats;
  }

  render() {
    return (
      <div>
        <section className="statistics">
          {this.title != null && <h2 class="title">{this.title}</h2>}

          <ul className="stat-list">
            {this.stats.map(stat => (
              <li className="item">
                <span className="label">{stat.label}</span>
                <span className="percentage">{stat.percentage}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
