import React from "react";

function EditAdmin() {
  return (
    <div>
      <div className="w-full rounded text-gray-800 border border-admin-primary/40 bg-white mb-40">
        <div className=" bg-orange-950/90 text-white p-3 flex justify-between items-center border-b">
          <span className="text-xl">Edit Admin</span>
        </div>
        <div className="px-3 pt-2 pb-2">
          <form className="w-full">
            <div className=" bg-green-800 text-white  flex items-center p-2 text-sm undefined">
              <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                Email
              </span>
              <input
                className="w-full p-1 bg-transparent focus:outline-none "
                step="any"
                name="email"
                required=""
                placeholder="Email"
                defaultValue="admin@super.com"
              />
            </div>
            <div className=" bg-green-800 text-white  flex items-center p-2 text-sm undefined">
              <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                Phone
              </span>
              <input
                className="w-full p-1 bg-transparent focus:outline-none "
                step="any"
                name="phone"
                required=""
                placeholder="Phone"
              />
            </div>
            <div className=" bg-green-800 text-white  flex items-center p-2 text-sm undefined">
              <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                Password
              </span>
              <input
                className="w-full p-1 bg-transparent focus:outline-none "
                step="any"
                name="password"
                placeholder="Password"
                defaultValue=""
              />
            </div>
            <div className=" bg-green-800 text-white flex items-center p-2 mt-1 rounded text-sm">
              <span className="w-[120px] ml-2">Admin Type</span>
              <select
                required=""
                name="admin_type_text"
                className="block w-full p-2 bg-transparent rounded appearance-none focus:outline-none"
              >
                <option value="" disabled="">
                  --- Select ---
                </option>
                <option
                  className="text-gray-700"
                  value="/bplt20-super-admin-latest-2023-admin-xyzabc"
                >
                  Super Admin
                </option>
                <option
                  className="text-gray-700"
                  value="/bplt20-trans-action-admin-latest-2023-xyzabc"
                >
                  Transaction Admin
                </option>
                <option
                  className="text-gray-700"
                  value="/game-action-admin-latest-2023-xyzabc-bplt20"
                >
                  Game Admin
                </option>
                <option
                  className="text-gray-700"
                  value="/game-bplt20-action-admin-latest-2023-xyzabc"
                >
                  Custom Game Admin
                </option>
              </select>
            </div>
            <div>
              <p className="text-gray-900 ml-2">Is Active:</p>
              <button
                className=" bg-orange-950 text-white   px-1 my-[2px] admin-game-btn shadow-lg p-2 "
                type="button"
                style={{
                  transition: "all 0.1s ease 0s",
                  width: "auto",
                  height: "auto",
                }}
              >
                Active
              </button>
            </div>
            <button
              type="submit"
              className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300  bg-green-800 rounded hover: bg-green-800/70 text-theme-light "
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditAdmin;
