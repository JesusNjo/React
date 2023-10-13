import React, { useState, useEffect } from "react";

export const UseCounter = (value) => {
  const [counter, setCounter] = useState(value);

  const sum = (value = 1) => {
    setCounter(counter + value);
  };
  const rest = (value = 1) => {
    if (counter >= 1) {
      setCounter(counter - value);
    } else {
      return;
    }
  };
  const reset = () => {
    setCounter(0);
  };

  const backRest = () => {
    if (counter < 0) {
      setCounter(0);
    }
  };
  useEffect(() => {
    backRest();
  }, [counter]);
  

  return {
    counter,
    sum,
    rest,
    reset,
    backRest,
  };
};
