import React from "react";

function EditCLub() {
  return (
    <div>
      <div className="w-full h-full overflow-y-scroll">
        <div className="w-full rounded text-gray-800 border border-admin-primary/40 bg-white mb-40">
          <div className="bg-orange-950/90 text-white p-3 flex justify-between items-center border-b">
            <span className="text-xl">Edit Club</span>
            <button className="text-2xl">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
              </svg>
            </button>
          </div>
          <div className="px-3 pt-2 pb-2">
            <form className="w-full">
              <div className="bg-green-800 text-white  flex items-center p-2 text-sm undefined">
                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                  Name
                </span>
                <input
                  className="w-full p-1 bg-transparent focus:outline-none "
                  step="any"
                  name="name"
                  required=""
                  placeholder="Name"
                  defaultValue="365 Club"
                />
              </div>
              <div className="bg-green-800 text-white  flex items-center p-2 text-sm undefined">
                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                  Balance
                </span>
                <input
                  className="w-full p-1 bg-transparent focus:outline-none "
                  step="any"
                  name="balance"
                  readOnly=""
                  placeholder="Balance"
                  defaultValue={0}
                />
              </div>
              <div className="bg-green-800 text-white  flex items-center p-2 text-sm undefined">
                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                  Commission Rate
                </span>
                <input
                  className="w-full p-1 bg-transparent focus:outline-none "
                  step="any"
                  name="commission_rate"
                  required=""
                  placeholder="Commission Rate"
                  defaultValue={2}
                />
              </div>
              <div className="bg-green-800 text-white  flex items-center p-2 text-sm undefined">
                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                  Owner E-mail
                </span>
                <input
                  className="w-full p-1 bg-transparent focus:outline-none "
                  step="any"
                  name="owner_email"
                  required=""
                  placeholder="Owner E-mail"
                  defaultValue="365@gmail.com"
                />
              </div>
              <div className="bg-green-800 text-white  flex items-center p-2 text-sm undefined">
                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                  Owner Phone
                </span>
                <input
                  className="w-full p-1 bg-transparent focus:outline-none "
                  step="any"
                  name="owner_phone"
                  required=""
                  placeholder="Owner Phone"
                  defaultValue={66602001}
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
                  defaultValue={10}
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
                  defaultValue={10000}
                />
              </div>
              <div className="bg-green-800 text-white  flex items-center p-2 text-sm undefined">
                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                  Password
                </span>
                <input
                  className="w-full p-1 bg-transparent focus:outline-none "
                  type="password"
                  step="any"
                  name="owner_password"
                  placeholder="Password"
                  defaultValue=""
                />
              </div>
              <div className="flex-center-center my-3">
                <p className="text-gray-900 ml-2">Is Active:</p>
                <button
                  className="bg-orange-950 text-white   px-1 my-[2px] admin-game-btn shadow-lg undefined "
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
                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-green-800 rounded hover:bg-green-800/70 text-theme-light "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCLub;
