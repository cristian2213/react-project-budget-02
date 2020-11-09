export const checkBudget = (budget, remaining) => {
  let alertClass;

  // x = remaining
  // user write: 1000 / 4 = 250 | 250 = 25% | if 25% > x
  if ((budget / 4) > remaining) {
    // spent more of the 75%
    alertClass = 'alert alert-danger';

    // 50%
  } else if ((budget / 2) > remaining) {
    alertClass = 'alert alert-warning';

    // 100%
  } else {
    alertClass = 'alert alert-success';
  }

  return alertClass;
};
