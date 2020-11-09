import React from 'react';
import Spending from './Spending';
import PropTypes from 'prop-types';

const ExpenseList = ({ expenses }) => (
  <div className="gastos-realizados">
    <h2>Expenses</h2>
    {expenses.map((expense) => (
      <Spending key={expense.id} expense={expense} />
    ))}
  </div>
);

ExpenseList.propTypes = { expenses: PropTypes.array.isRequired };
export default ExpenseList;
