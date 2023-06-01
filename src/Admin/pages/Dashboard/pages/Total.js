import React from "react";
import GoToUser from "../components/GoToUser";
import SingleGrid from "../components/SingleGrid";
import useTotal from "../Hooks/useTotal";

function Total() {
  const data = useTotal();
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

export default Total;
