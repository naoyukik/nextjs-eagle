"use client";
import React, { useState } from "react";
import UserList from "@/components/UserList";

const CountUp = ({ children }) => {
  const [count, setCount] = useState<number>(0);
  const countUp = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <h2>カウンター</h2>
      <div>Count: {count}</div>
      <button onClick={countUp}>+</button>
      {children}
    </>
  );
};

export default CountUp;
