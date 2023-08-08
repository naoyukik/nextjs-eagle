import BaseLayout from '@/app/layout/BaseLayout'
import React from 'react'
import CountUp from '@/components/client/CountUp'
import UserList from '@/components/UserList'
import CountTwoUp from '@/components/client/CountTwoUp' // import useSWR from "swr";
// import useSWR from "swr";

const Counter = async () => {
  return (
    <BaseLayout>
      <CountUp>
        <UserList />
      </CountUp>
      <CountTwoUp />
    </BaseLayout>
  );
};

export default Counter;
