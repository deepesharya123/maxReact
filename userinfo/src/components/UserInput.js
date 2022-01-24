import React, { useState } from "react";

import ErrorWin from "./ErrorWin";

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [inputValidate, setInputValidate] = useState(true);

  const setNameHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const setAgeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  const addInfoHandler = (e) => {
    e.preventDefault();
    const UserInfo = {
      name: enteredName,
      age: enteredAge,
      id: Math.random(),
    };
    if (UserInfo.name.length === 0 || UserInfo.age < 1) {
      setInputValidate(false);
      return;
    }
    // props.UserInfoList.push(UserInfo);
    console.log("UserInfoList ", props.UserInfoList);
    console.log("UserInfo ", UserInfo);
    props.onGettingData(UserInfo);
    setEnteredAge("");
    setEnteredName("");
  };

  let showForm = (
    <form onSubmit={addInfoHandler}>
      <div id="name">
        <label>Enter name : </label>
        <input type="text" value={enteredName} onChange={setNameHandler} />
      </div>
      <div id="age">
        <label>Enter age: </label>
        <input type="number" value={enteredAge} onChange={setAgeHandler} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );

  const [curState,setCurState] = useState(false);
  const CloseErrorHandler = ()=>{
    setCurState(false);
  }
    
  return (
    <div>
      {inputValidate && showForm}
      {!inputValidate && <ErrorWin closeError={CloseErrorHandler} />}
    </div>
  );
};

export default UserInput;
