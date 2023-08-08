"use client";
import React, { useState } from "react";
import UserList from "@/components/UserList";

const CountTwoUp = () => {
  const [count, setCount] = useState<number>(0);
  const countUp = () => {
    setCount((prev) => prev + 2);
  };
  return (
    <>
      <h2>カウンター</h2>
      <div>Count: {count}</div>
      <button onClick={countUp}>2ずつ+</button>
    </>
  );
};

export default CountTwoUp;
