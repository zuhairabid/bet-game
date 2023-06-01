import React from "react";
import SingleGrid from "../components/SingleGrid";
import useDefault from "../Hooks/useDefault";
import GoToUser from "../components/GoToUser";

function Default() {
  const data = useDefault();
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

export default Default;
