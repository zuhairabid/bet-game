import React from "react";
import GoToUser from "../components/GoToUser";
import SingleGrid from "../components/SingleGrid";
import useMonthly from "../Hooks/useMonthly";

function Monthly() {
  const data = useMonthly();
  return (
    <div>
      <div>
        {data.map((i) => {
          return (
            <SingleGrid id={i.id} key={i.id} title={i.title} value={i.value} />
          );
        })}
      </div>
      <GoToUser />
    </div>
  );
}

export default Monthly;
