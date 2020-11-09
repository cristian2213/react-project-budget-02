import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Question = ({ saveBudget, saveRemaining, updateQuestion }) => {
  // define state
  const [quantity, saveQuantity] = useState(0);
  const [error, saveError] = useState(false);

  // save bubget
  const readBudget = (e) => {
    saveQuantity(parseInt(e.target.value, 10));
  };

  // define budget
  const addBudget = (e) => {
    e.preventDefault();

    // validate budget
    if (quantity < 1 || isNaN(quantity)) {
      saveError(true);
      return;
    }

    // the validation was successful
    saveError(false);

    // save Budget and remaining
    saveBudget(quantity);
    saveRemaining(quantity);
    updateQuestion(false);
  };

  return (
    <Fragment>
      <h2>Place your budget</h2>
      {error ? <Error message="The budget is wrong" /> : null}
      <form onSubmit={addBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Place your budget"
          name="budget"
          onChange={readBudget}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Define budget"
        />
      </form>
    </Fragment>
  );
};

Question.propTypes = {
  saveBudget: PropTypes.func.isRequired,
  saveRemaining: PropTypes.func.isRequired,
  updateQuestion: PropTypes.func.isRequired,
};

export default Question;
