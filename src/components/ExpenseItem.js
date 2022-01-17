import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../components/Card";
import React from "react";

function ExpenseItem(props) {
  return (
    // className="expense-item" can't be set to custom tag of component , 
    // we need to const classes = 'some_desired_calssName '+ props.className 
    <Card className="expense-item">
      <div> 
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2> {props.title}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
