import ExpenseItem  from "./components/ExpenseItem";

function App() {
  // this is imparative approach as i am tellling line by line what to do to render the html.
  // const para = document.createElement("p");
  // para.textContent = "This will also be visible";
  // document.getElementById("root").appendChild(para);

  // below is declarative approach 
  return (
    <div>
      <h1>Let's get started.</h1>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
