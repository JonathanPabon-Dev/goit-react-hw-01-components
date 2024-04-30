import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.title = this.props.title;
    this.stats = this.props.stats;
  }

  render() {
    return (
      <div>
        <section className={css.statistics}>
          {this.title != null && <h2 className={css.title}>{this.title}</h2>}

          <ul className={css.statList}>
            {this.stats.map(stat => (
              <li
                className={css.item}
                style={{ backgroundColor: getRandomHexColor() }}
              >
                <span className={css.label}>{stat.label}</span>
                <span className={css.percentage}>{stat.percentage}%</span>
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

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
