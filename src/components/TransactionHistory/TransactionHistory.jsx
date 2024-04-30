import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

class TransactionHistory extends Component {
  constructor(props) {
    super(props);
    this.items = this.props.items;
  }

  render() {
    return (
      <section className={css.transHistory}>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            {this.items.map(item => (
              <tr>
                <td style={{ textTransform: 'capitalize' }}>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

export default TransactionHistory;
