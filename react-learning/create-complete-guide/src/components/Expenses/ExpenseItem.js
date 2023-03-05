import React from "react";
import Card from "../UI/Card";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <div>{props.date.toISOString()}</div>
        <div className="expense-item__description">
         </div>
        <div className="expense-item__price">{props.amount}</div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
