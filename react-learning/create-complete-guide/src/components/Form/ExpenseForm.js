import React,{useState} from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {

    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');

    // const [userInput,setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })

const titleChangeHandler=(event)=>{
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value
        
    // })
    // alternative to both, go with approach if you are depending with previous state
     // setUserInput((prevState)=>{
    //  return {...prevState,enteredTitle:event.target.value}   
    // })
    setEnteredTitle(event.target.value);
   
}
const amountChangeHandler=(event)=>{
    
    // setUserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value
    // })
    setEnteredAmount(event.target.value);
}
const dateChangeHandler=(event)=>{
    
    // setUserInput({
    //     ...userInput,
    //     enteredDate:event.target.value
    // })
    setEnteredDate(event.target.value);
}

const submiHandler=(event)=>{
  event.preventDefault();
  const expenseData={
    title:enteredTitle,
    amount:+enteredAmount,
    date:new Date(enteredDate)
  }
  setEnteredTitle('');
  setEnteredAmount('');
  setEnteredDate('');
  props.onSaveExpenseData(expenseData);
  console.log(expenseData)
}
  return (
    <form onSubmit={submiHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" value={enteredAmount} step="0.01"  onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type='date' min='2019-01-01' value={enteredDate} max='2022-12-31' onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
