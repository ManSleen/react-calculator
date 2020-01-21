import React from "react";

const NumberPad = ({ setState }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const numberElements = [];

  const numberGenerator = nums => {
    nums.forEach(num => {
      numberElements.push(
        <div
          className="number-button"
          onClick={() => {
            setState(num);
          }}
        >
          {num}
        </div>
      );
    });
  };
  numberGenerator(numbers);
  return <div className="number-pad-container">{numberElements}</div>;
};

export default NumberPad;
