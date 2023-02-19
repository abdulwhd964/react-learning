import React from "react";
import ExpenseForm from "../Form/ExpenseForm";
import './NewExpense.css';

function NewExpense(props){

    function saveExpenseData(enteredExpenseData){

        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.addExpense(expenseData)
        console.log("in New Expense",expenseData)
    };

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseData}/>
    </div>
}

export default NewExpense;