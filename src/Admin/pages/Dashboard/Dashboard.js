import React from "react";
import { useState } from "react";
import Default from "./pages/Default";
import Today from "./pages/Today";
import Total from "./pages/Total";
import Monthly from "./pages/Monthly";

function Dashboard() {
  const [page, setPage] = useState("Default");
  const pages = ["Default", "Today", "Monthly", "Total"];
  return (
    <div className="px-3 rounded bg-gray-200">
      <div className="flex py-3 ">
        {pages.map((i) => {
          return (
            <span
              key={Math.round(Math.random() * 1000000)}
              className={`px-2 py-1 mx-1  border border-green-700 rounded-md cursor-pointer ${
                page == i ? "bg-green-800 text-white" : "text-green-700"
              }`}
              onClick={() => setPage(i)}
            >
              {i}
            </span>
          );
        })}
      </div>

      <div className="bg-white ">
        {page == "Default" ? (
          <Default />
        ) : page == "Total" ? (
          <Total />
        ) : page == "Monthly" ? (
          <Monthly />
        ) : page == "Today" ? (
          <Today />
        ) : (
          <Default />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
