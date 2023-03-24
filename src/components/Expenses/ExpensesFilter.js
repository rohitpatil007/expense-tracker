import { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const [selectValue, setSelectValue] = useState("2023");
  const onChangeHander = (event) => {
    const value = event.target.value;
    setSelectValue(value);
  };
  props.SelectedYear(selectValue);
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={onChangeHander}>
          <option value="2021">2023</option>
          <option value="2021">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
