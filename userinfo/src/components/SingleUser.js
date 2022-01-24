import React from "react";

import "./SingleUser.css";

const SingleUser = (props) => {
  return (
    <div className="singleUser">
      <div>
       Name: {props.userInfo.name}    Age: {props.userInfo.age}
      </div>
    </div>
  );
};

export default SingleUser;
