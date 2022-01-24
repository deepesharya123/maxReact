import React from "react";

import "./SingleUser.css";

const SingleUser = (props) => {
  return (
    <div className="singleUser">
      <div>
        {props.userInfo.name} {props.userInfo.age}
      </div>
    </div>
  );
};

export default SingleUser;
