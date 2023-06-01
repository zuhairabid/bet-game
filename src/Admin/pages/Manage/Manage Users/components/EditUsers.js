import React from "react";

function EditUsers() {
  return (
    <div>
      <div className="w-full rounded text-gray-800 border border-admin-primary/40 bg-white mb-40">
        <div className="bg-orange-950/90 text-white p-3 flex justify-between items-center border-b">
          <span className="text-xl">Edit User</span>
        </div>
        <div className="px-3 pt-2 pb-2">
          <form className="w-full">
            <div className="bg-green-800 text-white  flex items-center p-2 text-sm undefined">
              <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                Username
              </span>
              <input
                className="w-full p-1 bg-transparent focus:outline-none "
                step="any"
                name="username"
                required=""
                readOnly=""
                placeholder="Username"
                defaultValue="developer"
              />
            </div>
            <div className="bg-green-800 text-white  flex items-center p-2 text-sm undefined">
              <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                Phone
              </span>
              <input
                className="w-full p-1 bg-transparent focus:outline-none "
                step="any"
                name="phone"
                required=""
                readOnly=""
                placeholder="Phone"
              />
            </div>
            <div className="bg-green-800 text-white  flex items-center p-2 text-sm undefined">
              <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                Balance
              </span>
              <input
                className="w-full p-1 bg-transparent focus:outline-none "
                type="number"
                step="any"
                name="balance"
                readOnly=""
                placeholder="Balance"
                defaultValue={0}
              />
            </div>
            <div className="bg-green-800 text-white  flex items-center p-2 text-sm undefined">
              <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                Sponsor Rate
              </span>
              <input
                className="w-full p-1 bg-transparent focus:outline-none "
                step="any"
                name="sponsor_rate"
                placeholder="Sponsor Rate"
                defaultValue={0}
              />
            </div>
            <div className="bg-green-800 text-white  flex items-center p-2 text-sm undefined">
              <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                Minimum Deposit
              </span>
              <input
                className="w-full p-1 bg-transparent focus:outline-none "
                step="any"
                name="min_deposit"
                placeholder="Minimum Deposit"
                defaultValue={0}
              />
            </div>
            <div className="bg-green-800 text-white  flex items-center p-2 text-sm undefined">
              <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                Maximum Deposit
              </span>
              <input
                className="w-full p-1 bg-transparent focus:outline-none "
                step="any"
                name="max_deposit"
                placeholder="Maximum Deposit"
                defaultValue={0}
              />
            </div>
            <div className="bg-green-800 text-white  flex items-center p-2 text-sm undefined">
              <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                Minimum Withdraw
              </span>
              <input
                className="w-full p-1 bg-transparent focus:outline-none "
                step="any"
                name="min_withdraw"
                placeholder="Minimum Withdraw"
                defaultValue={0}
              />
            </div>
            <div className="bg-green-800 text-white  flex items-center p-2 text-sm undefined">
              <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                Maximum Wihdraw
              </span>
              <input
                className="w-full p-1 bg-transparent focus:outline-none "
                step="any"
                name="max_withdraw"
                placeholder="Maximum Wihdraw"
                defaultValue={0}
              />
            </div>
            <div className="bg-green-800 text-white flex items-center p-2 mt-1 rounded text-sm">
              <span className="w-[120px] ml-2">Club</span>
              <select
                required=""
                name="club_id"
                className="block w-full p-2 bg-transparent rounded appearance-none focus:outline-none"
              >
                <option value="" disabled="">
                  --- Select ---
                </option>
                <option value={3}>BplT20 Official Club</option>
                <option value={1}>365 Club</option>
                <option value={2}>Club2</option>
              </select>
            </div>
            <div className="bg-green-800 text-white  flex items-center p-2 text-sm undefined">
              <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                Password
              </span>
              <input
                className="w-full p-1 bg-transparent focus:outline-none "
                type="password"
                step="any"
                name="password"
                placeholder="Password"
                defaultValue=""
              />
            </div>
            <div className="flex-center-center">
              <div>
                <p className="text-gray-900 ml-2">Is Active:</p>
                <button
                  className="bg-orange-950 text-white   px-1 my-[2px] admin-game-btn shadow-lg p-2 "
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
              <div>
                <p className="text-gray-900 ml-2">User Type:</p>
                <button
                  className=" bg-gray-200 text-gray-700   px-1 my-[2px] admin-game-btn shadow-lg p-2 "
                  type="button"
                  style={{
                    transition: "all 0.1s ease 0s",
                    width: "auto",
                    height: "auto",
                  }}
                >
                  Normal
                </button>
              </div>
            </div>
            <div className="flex-center-center mt-2">
              <div>
                <p className="text-gray-900 ml-2">Can transfer balance:</p>
                <button
                  className="bg-orange-950 text-white   px-1 my-[2px] admin-game-btn shadow-lg p-2 "
                  type="button"
                  style={{
                    transition: "all 0.1s ease 0s",
                    width: "auto",
                    height: "auto",
                  }}
                >
                  On
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-green-800 rounded hover:bg-green-800/70 text-theme-light "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditUsers;
