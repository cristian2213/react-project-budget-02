import React from 'react';
import PropTypes from 'prop-types';

const Spending = ({ expense }) => (
  <li className="gastos">
    <p>
      {expense.spendingName}
      <span className="gasto">$ {expense.amount}</span>
    </p>
  </li>
);

Spending.propTypes = {
  expense: PropTypes.object.isRequired,
};
export default Spending;
