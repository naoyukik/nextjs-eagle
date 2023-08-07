import BaseLayout from "@/app/layout/BaseLayout";
import React from "react";
import CountUp from "@/components/CountUp";
import UserList from "@/components/UserList";
import useSWR from "swr";

const Counter = async () => {
  console.log("1");
  return (
    <BaseLayout>
      <CountUp>
        <UserList />
      </CountUp>
    </BaseLayout>
  );
};

export default Counter;
