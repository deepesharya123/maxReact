import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

function App() {
  // this is imparative approach as i am tellling line by line what to do to render the html.
  // const para = document.createElement("p");
  // para.textContent = "This will also be visible";
  // document.getElementById("root").appendChild(para);

  const expenses = [
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

  // below is declarative approach
  return (
    <div>
      <NewExpense />
      <h1>
        <Expenses items={expenses} />
      </h1>
    </div>
  );
}

export default App;
