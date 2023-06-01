import React, { useEffect, useState } from "react";

function useMonthly() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([
      {
        id: 1,
        title: "Deposit(this month)",
        value: 0.0,
      },
      {
        id: 2,
        title: "Withdraw(this month)",
        value: 0.0,
      },
      {
        id: 3,
        title: "Club Withdraw(this month)",
        value: 0.0,
      },
      {
        id: 4,
        title: "Monthly Profit",
        value: 0.0,
      },
      {
        id: 5,
        title: "Monthly Super Club Commission",
        value: 0.0,
      },
      {
        id: 6,
        title: "Monthly Cashout",
        value: 0.0,
      },
    ]);
  }, []);

  return data;
}

export default useMonthly;
