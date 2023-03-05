import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filteredYear, setFilterYear] = useState('2020')
  
  function filterChangeHandler(selectedYear){
    setFilterYear(selectedYear);

    console.log(selectedYear)
  }
  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  })
  
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter  selected={filteredYear} filterChange={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
