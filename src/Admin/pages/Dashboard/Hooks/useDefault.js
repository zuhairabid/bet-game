import React, { useState, useEffect } from "react";

function useDefault() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([
      {
        id: 1,
        title: "User Balance",
        value: 0.0,
      },
      {
        id: 2,
        title: "Club Balance",
        value: 0.0,
      },
      {
        id: 3,
        title: "Total bet pending amount",
        value: 0.0,
      },
      {
        id: 4,
        title: "Total Profit",
        value: 0.0,
      },
      {
        id: 5,
        title: "Today Deposit",
        value: 0.0,
      },
      {
        id: 6,
        title: "Today Withdraw",
        value: 0.0,
      },
    ]);
  }, []);

  return data;
}

export default useDefault;
