import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TransactionHistory extends Component {
  constructor(props) {
    super(props);
    this.items = this.props.items;
  }

  render() {
    return (
      <div>
        <table className="transaction-history">
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
                <td>
                  {item.type.slice(0, 1).toUpperCase() + item.type.slice(1)}
                </td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

export default TransactionHistory;
