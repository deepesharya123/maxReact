function App() {
  const para = document.createElement("p");
  para.textContent = "This will also be visible";
  document.getElementById("root").appendChild(para);

  return (
    <div>
      <h1>Let's get started.</h1>
      <p>This is also visible.</p>  
    </div>
  );
}

export default App;
