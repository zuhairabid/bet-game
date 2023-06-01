import React from "react";

function GoToUser() {
  return (
    <div className="w-full p-2">
      <div className="flex bg-green-900 p-3 mb-2">
        <p className="mr-10">Username</p>
        <input placeholder="Username" className="bg-green-900 w-full" />
      </div>
      <button className="bg-green-900 text-white p-3 w-full">
        <p>Go to user</p>
      </button>
    </div>
  );
}

export default GoToUser;
