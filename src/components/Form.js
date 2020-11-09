import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Form = ({ updateSpending, saveCreateSpending }) => {
  const [spendingName, saveSpendingName] = useState('');
  const [amount, saveAmount] = useState(0);
  const [error, saveError] = useState(false);

  // filterAmount
  const filterAmount = (e) => {
    e.preventDefault();
    const filterAmountInput = e.target.value;

    if (filterAmountInput.length < 1) {
      saveError(true);
      saveAmount('');
      return;
    }

    // save
    saveError(false);
    saveAmount(parseInt(filterAmountInput));
  };

  // when the user adds a spending
  const submitSpending = (e) => {
    e.preventDefault();

    // validate each field
    if (spendingName.trim() === '' || amount < 1 || isNaN(amount)) {
      saveError(true);
      return;
    }

    // delete the previous message
    saveError(false);

    // build spending
    const spending = {
      spendingName,
      amount,
      id: shortid.generate(),
    };

    // sending the spending to the main component
    updateSpending(spending);

    saveCreateSpending(true);

    // reset form
    saveSpendingName('');
    saveAmount(0);
  };
  return (
    <form onSubmit={submitSpending}>
      <h2>Add your expenses here</h2>
      {error ? <Error message="All fields are required" /> : null}
      <div className="campo">
        <label>Spending</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ex. Transport"
          onChange={(e) => saveSpendingName(e.target.value)}
          value={spendingName}
        />
      </div>

      <div className="campo">
        <label>Amount to spent</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ex. 300"
          onChange={(e) => filterAmount(e)}
          value={amount}
        />
      </div>

      <button
        type="submit"
        className="button-primary u-full-width"
        value="Add budget"
      >
        Add expense
      </button>
    </form>
  );
};

Form.propTypes = {
  updateSpending: PropTypes.func.isRequired,
  saveCreateSpending: PropTypes.func.isRequired,
};
export default Form;
