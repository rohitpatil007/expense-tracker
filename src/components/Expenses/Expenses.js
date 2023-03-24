import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterdYear, setfilterdYear] = useState("");
  const filterChangeHandler = (SelectedYear) => {
    setfilterdYear(SelectedYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterdYear}
        SelectedYear={filterChangeHandler}
      />
      <ExpensesChart expenses={filterExpenses} />

      <ExpensesList items={filterExpenses}></ExpensesList>
    </Card>
  );
};
export default Expenses;
