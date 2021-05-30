import React, { Fragment, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    if (counter > 0) setCounter(counter - 1);
  };
  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <Fragment>
      <div id="counter-value">
        <h1>{counter}</h1>
      </div>
      <button id="decrement-btn" onClick={decreaseCounter}>
        -
      </button>
      <button id="reset-btn" onClick={resetCounter}>
        0
      </button>
      <button id="increment-btn" onClick={increaseCounter}>
        +
      </button>
    </Fragment>
  );
};

export default Counter;
