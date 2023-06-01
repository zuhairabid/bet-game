import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Header from "./Admin/Components/Header";

function RequireAuth() {
  const params = useParams();
  if (params.username != "abid") {
    return <div>RequireAuth</div>;
  } else {
    return (
      <div>
        <Header /> <Outlet />
      </div>
    );
  }
}

export default RequireAuth;
