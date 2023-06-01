import React from "react";
import useToday from "../Hooks/useToday";
import GoToUser from "../components/GoToUser";
import SingleGrid from "../components/SingleGrid";

function Today() {
  const data = useToday();
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

export default Today;
