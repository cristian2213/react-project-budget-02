import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { checkBudget } from '../healpers';

const ControlBudget = ({ budget, remaining }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Budget: {budget}</div>
      <div className={checkBudget(budget, remaining)}>
        Remaining: {remaining}
      </div>
    </Fragment>
  );
};

ControlBudget.propTypes = {
  budget: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
};

export default ControlBudget;
