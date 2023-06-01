import React from "react";

function LiveUsers() {
  return (
    <div>
      <div>
        <div className=" py-1  text-center text-[24px] text-primary bg-admin-secondary text-white">
          Live Users
        </div>
        <div className="bg-white px-2">
          <button className="bg-green-500 px-2 py-1 text-white rounded my-2 ">
            Refresh
          </button>
          <span className="bg-orange-500 text-white px-2 py-2 rounded mx-2">
            Total: 0
          </span>
          <button className=" bg-red-600 text-white py-1 px-2 rounded">
            Logout All Users
          </button>
          <div>
            <div className="overflow-scroll  border border-admin-primary/20 shadow rounded">
              <table className="min-w-full whitespace-nowrap text-center divide-y divide-gray-200 table-striped ">
                <thead className="text-center bg-orange-950/90 text-white">
                  <tr>
                    <th className="p-4">#</th>
                    <th>Username</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-admin-primary odd-bg-gray" />
              </table>
            </div>
            <div className="flex-center-center pb-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveUsers;
