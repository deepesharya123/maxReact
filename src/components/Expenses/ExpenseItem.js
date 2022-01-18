import React, { useState } from "react";
// useState is a function, which is use to show the change in the state
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  
  // useState function returns 2 var, first is var that point to passed var, 
  // second is a funciton that is responsible to change the first var and 
  // hence recall the state with the changed value 
  const [title,setTitle] = useState(props.title);


  // let titleChange = props.title;
  const clickHandler = ()=>{
    // useState() is function with arg as a update that is required 
    // and then it recalls the component with that updated value;
    setTitle("Update title");


    // props.title = "changing the title "+i;   //can't set the props property
    // titleChange = "changing the title";     //  this does'nt work as react first resolve all the component
    console.log("CLicked! ",title);
  }


  return (
    // className="expense-item" can't be set to custom tag of component , 
    // we need to const classes = 'some_desired_calssName '+ props.className 
    <Card className="expense-item">
      <div> 
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description">
        <h2> {title}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
      </div>

      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
