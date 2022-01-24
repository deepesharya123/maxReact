import React, { useState } from "react";
import "./App.css";

import UserInput from "./components/UserInput";
import AllUserInfo from "./components/AllUserInfo";

const UserInfoListArray = [
  { name: "Max", age: "23" ,id:1},
  { name: "Sam", age: "51" ,id:2},
];
function App() {  
  const [UserInfoList,setUserInfoList] = useState(UserInfoListArray);

  const UpdateInfoHandler = (enteredValue)=>{
    setUserInfoList((preInfo)=>{
      return [...preInfo,enteredValue]
    })
  }

  return (
    <div className="App">
      <UserInput onGettingData={UpdateInfoHandler} UserInfoList={UserInfoList}></UserInput>
      <AllUserInfo  UserInfoList={UserInfoList} ></AllUserInfo>
    </div>
  );
}

export default App;
