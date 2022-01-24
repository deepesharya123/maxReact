import React from "react";

import SingleUser from "./SingleUser";

const AllUserInfo = (props) => {
    
  return (
    <div>
      {props.UserInfoList.map((user) => (
        <SingleUser userInfo={user} />
      ))}
    </div>
  );
};

export default AllUserInfo;
