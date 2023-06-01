import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

function SingleGrid(props) {
  const position = props.id % 3;
  // const position = 1;
  const icons = [faMoneyBill, faCoins, faDollarSign];
  const colors = ["green", "orange", "blue"];

  return props.id ? (
    <div
      className={`my-2 flex items-center  p-2  bg-${
        colors[position % 3]
      }-200 rounded`}
    >
      <div className="w-16 p-3 mr-3 bg-neutral-300 flex items-center justify-center rounded-md">
        <FontAwesomeIcon
          icon={icons[position % 3]}
          className={`text-${colors[position % 3]}-400 h-8`}
        />
      </div>
      <div>
        <p className="text-sm text-neutral-500">{props.title}</p>
        <p className="text-lg font-bold">{props.value}</p>
      </div>
    </div>
  ) : (
    <div>hello</div>
  );
}

export default SingleGrid;
