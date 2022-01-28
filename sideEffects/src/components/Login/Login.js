import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

const emailReducer = (state, action) => {
  // state in all the reducer function will always be the last state
  if (action.type === "USER_INPUT") {
    console.log("validating insidethe dispat");
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    console.log("Inside tyhe input blur of email dispath ");
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

// {
//   value: "",
//   isValid: false,
// }
const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    console.log("Inside the user_input of password reducer");
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    console.log("INPUT_BLUR of password reducer",state);
    return { value: state.value, isValid: state.value.trim().length>6 };
  }
  return { value: "", isValid: false };
};
const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // useEffect(() => {
  //   console.log("This will run all the time, with all the key strokes");
  // });

  // useEffect(()=>{
  //   console.log("This will run only once when the page load(after page loading completed) beacuse the array [] does not change");
  // },[])

  // useEffect(()=>{
  //   console.log("Will run only when the password gets changed");
  //   return ()=>{
  //     console.log("cleaning up the password useEffect ");
  //   }
  // }, [enteredPassword])

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: '',
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: '',
  });

  const authCtx = useContext(AuthContext);

  const { isValid: emailIsValid } = emailState.isValid;
  const { isValid: passwordIsValid } = passwordState.isValid;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking the validity!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 600);

    return () => {
      console.log("Clearing , using cleratimeout ");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    console.log(event.target.value," value of changing the email ", emailState.value)
    dispatchEmail({ type: "USER_INPUT", val: event.target.value }); // for updating the email entered
    setFormIsValid(
      event.target.value.includes("@") && passwordState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    console.log(event.target.value," updatig the value of password ",passwordState.value)
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
    setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: "INPUT_BLUR" }); // if we do not pass val option , it will not give error
    // as till not there is no handling of this action type
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(passwordState.value.trim().length > 6);
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
