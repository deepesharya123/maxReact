import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredDate: "",
  //   enteredAmount: "",
  //   enteredTitle: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // console.log("enteredTitle ", enteredTitle);
    // setUserInput({   // changing the value of a field with one state is not recomded by thi method
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // correct method of using state is as follows:
    // setUserInput((userInput) => { //this method is recommended for changing the value of a field with one state
    //   return { ...userInput, enteredTitle: event.target.value };
    // });
    // console.log("title changed", userInput);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // console.log("enteredAmount ", enteredAmount);
    // setUserInput({ //changing the value of a field with one state is not recomded by thi method
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // setUserInput((usertInput) => { //this method is recommended for changing the value of a field with one state
    //   return { ...usertInput, enteredAmount: event.target.value };
    // });
    // console.log("amount changed ", userInput);
  };

  const dateChnageHandler = (event) => {
    setEnteredDate(event.target.value);
    // console.log("enterdDate ", enteredDate);
    // setUserInput({ //changing the value of a field with one state is not recomded by thi method
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // setUserInput((userInput) => {  //this method is recommended for changing the value of a field with one state 
    //   return { ...userInput, enteredDate: event.target.value };
    // });
    // console.log("date cahnged", userInput);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    console.log(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-1-1"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChnageHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
