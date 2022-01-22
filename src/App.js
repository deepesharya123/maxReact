import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  // this is imparative approach as i am tellling line by line what to do to render the html.
  // const para = document.createElement("p");
  // para.textContent = "This will also be visible";
  // document.getElementById("root").appendChild(para);

  // This is how react DOM work
  // return (React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Let's get started"),
  //   React.createElement(
  //     "h1",
  //     {},
  //     React.createElement(Expenses, { items: expenses })
  //   )
  // ));

  const addExpenseHandler = (enteredInput) => {
    // setExpenses([enteredInput,...expenses]);
    setExpenses((prevEx)=>{
      return [...prevEx,enteredInput]
    })
  };

  // below is declarative approach
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
