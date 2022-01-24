import React from "react";

import './ErrorWin.css'
const ErrorWin = (props) => {

    return (
    <div>
      <div className="popup" id="popup-1">
        <div className="overlay"></div>
        <div className="content">
          <div className="close-btn" onClick={props.closeError}>
            &times;
          </div>
          <h1>Title</h1>
          <p>You entered the wrong data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorWin;

