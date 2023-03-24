import Expenses from "./components/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Footer from "./components/UI/Footer";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 7, 28),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.67,
    date: new Date(2021, 1, 12),
  },
  {
    id: "e3",
    title: "Toilet Paper",
    amount: 7449.67,
    date: new Date(2020, 9, 2),
  },
];
const App = () => {
  // WITHOUT JSX
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started !!!"),
  //   React.createElement(Expenses, { items: expense })
  // );

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  // WITH JSX
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <Footer />
    </div>
  );
};

export default App;
