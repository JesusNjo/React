import React, { useEffect, useState } from "react";
import { UseCounter } from "../hooks/UseCounter";

export const ContadorCom = () => {
  const { counter, sum, rest, reset } = UseCounter(0);

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button className="btn btn-primary m-1" onClick={() => sum()}>
        +1
      </button>
      <button className="btn btn-danger m-1" onClick={() => reset()}>
        Reset
      </button>
      <button className="btn btn-primary m-1" onClick={() => rest()}>
        -1
      </button>
    </>
  );
};
