import React, { useEffect, useState } from "react";

function useToday() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([
      {
        id: 1,
        title: "Today Club Withdraw",
        value: 0.0,
      },
      {
        id: 2,
        title: "Today profit",
        value: 0.0,
      },
      {
        id: 3,
        title: "Today bets amount",
        value: 0.0,
      },
      {
        id: 4,
        title: "Today bets win",
        value: 0.0,
      },
      {
        id: 5,
        title: "Today refund",
        value: 0.0,
      },
      {
        id: 6,
        title: "Today sponsor bonus",
        value: 0.0,
      },
      {
        id: 7,
        title: "Today club bonus",
        value: 0.0,
      },
      {
        id: 8,
        title: "Today Super Club Commission",
        value: 0.0,
      },
      {
        id: 9,
        title: "Today Cashout",
        value: 0.0,
      },
    ]);
  }, []);

  return data;
}

export default useToday;
