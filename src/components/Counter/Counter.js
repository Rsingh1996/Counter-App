import React, { Fragment, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <Fragment>
      <div id="counter-value">
        <h1>{counter}</h1>
      </div>
      <button
        id="decrement-btn"
        onClick={() => {
          if (counter > 0) setCounter(counter - 1);
        }}
      >
        -
      </button>
      <button
        id="reset-btn"
        onClick={() => {
          setCounter(0);
        }}
      >
        0
      </button>
      <button
        id="increment-btn"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
    </Fragment>
  );
};

export default Counter;
