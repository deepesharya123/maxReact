import React, { useCallback, useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/UI/Button/Demo/DemoOutput";
// import MyParagraph from "./components/UI/Button/Demo/MyParagraph";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) setShowParagraph((prevState) => !prevState);
  }, [allowToggle]);

  const allowToggleHandler = () => {
    console.log("Allow toggling")
    setAllowToggle(true);
  };

  console.log("Running from app");
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}> Allow Toggle Pragraph! </Button>
      <Button onClick={toggleParagraphHandler}> Toggle Pragraph! </Button>
    </div>
  );
}

export default App;
