import React, { useState } from "react";
import Display from "./Display";
import NumberPad from "./NumberPad";
import Operations from "./Operations";

const Calculator = () => {
  const [state, setState] = useState([]);

  return (
    <div className="calculator-container">
      <Display state={state} />
      <div className="buttons-container">
        <NumberPad setState={setState} />
        <Operations />
      </div>
    </div>
  );
};

export default Calculator;
