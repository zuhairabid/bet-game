import React, { useEffect, useState } from "react";

function useTotal() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([
      {
        id: 1,
        title: "Total user",
        value: 0.0,
      },
      {
        id: 2,
        title: "Total Club",
        value: 0.0,
      },
      {
        id: 3,
        title: "Total Admin",
        value: 0.0,
      },
      {
        id: 4,
        title: "Total Game",
        value: 0.0,
      },
      {
        id: 5,
        title: "Total Deposit",
        value: 0.0,
      },
      {
        id: 6,
        title: "Total Withdraw",
        value: 0.0,
      },
      {
        id: 7,
        title: "Total Club Withdraw",
        value: 0.0,
      },
      {
        id: 8,
        title: "Total sponsor bonus",
        value: 0.0,
      },
      {
        id: 9,
        title: "Total club bonus",
        value: 0.0,
      },
      {
        id: 10,
        title: "Total Super Club Commission",
        value: 0.0,
      },
      {
        id: 11,
        title: "Total Cashout",
        value: 0.0,
      },
    ]);
  }, []);

  return data;
}

export default useTotal;
