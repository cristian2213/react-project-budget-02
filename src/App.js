import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import ExpenseList from './components/ExpenseList';
import ControlBudget from './components/ControlBudget';

function App() {
  //* States
  const [budget, saveBudget] = useState(0);
  const [remaining, saveRemaining] = useState(0);
  const [showQuestion, updateQuestion] = useState(true);
  const [expenses, saveSpending] = useState([]);
  const [spending, updateSpending] = useState({});
  const [createSpending, saveCreateSpending] = useState(false);

  // useEffect
  useEffect(() => {
    if (createSpending) {
      // add new budget
      saveSpending([...expenses, spending]);

      // subtract the budget
      const remainingBudget = remaining - spending.amount;
      saveRemaining(remainingBudget);

      // Reset to false
      saveCreateSpending(false);
    }
  }, [createSpending, expenses, remaining, spending]);

  return (
    <div className="container">
      <header>
        <h1>Weekly expenses</h1>
        <div className="contenido-principal contenido">
          {/* Component Conditional Load */}
          {showQuestion ? (
            <Question
              saveBudget={saveBudget}
              saveRemaining={saveRemaining}
              updateQuestion={updateQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form
                  updateSpending={updateSpending}
                  saveCreateSpending={saveCreateSpending}
                />
              </div>
              <div className="one-half column">
                <ExpenseList expenses={expenses} />

                <ControlBudget budget={budget} remaining={remaining} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
