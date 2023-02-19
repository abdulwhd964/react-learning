import React,{useState} from 'react';
import Card from '../UI/Card';

import './ExpenseItem.css';

function ExpenseItem(props) {

    const [title,setTitle]= useState(props.title);

    function changeTitle(){
       setTitle('Updated');
     }
    return (
    <Card className='expense-item'>
        <div>{props.date.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{title}</h2>
        </div>
        <div className='expense-item__price'>{props.amount}</div>
        <button onClick={changeTitle}>Change Title</button>
    
    </Card>);
}

export default ExpenseItem;