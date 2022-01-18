import "./Card.css";
import React from "react";

const Card = (props) => {
    const classes = 'card '+ props.className;
    // can directly pass any other component inside another, 
    // we need to use {props.children}
  return <div className={classes}>{props.children}</div>;
}

export default Card;
