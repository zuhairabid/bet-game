import React from "react";

function EditPayment() {
  return (
    <div>
      <div className="w-full rounded text-gray-800 border border-admin-primary/40 bg-white mb-40">
        <div className="bg-orange-950 text-white p-3 flex justify-between items-center border-b">
          <span className="text-xl">Edit Payment</span>
        </div>
        <div className="px-3 pt-2 pb-2">
          <form className="m-2 bg-white">
            <div className="">
              <div className="bg-green-800 text-white  flex items-center p-2 text-sm rounded-t">
                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                  name
                </span>
                <input
                  className="w-full p-1 bg-transparent focus:outline-none "
                  step="any"
                  name="name"
                  placeholder="name"
                  defaultValue="bkash"
                />
              </div>
              <div className="bg-green-800 text-white  flex items-center p-2 text-sm rounded-b">
                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                  number
                </span>
                <input
                  className="w-full p-1 bg-transparent focus:outline-none "
                  type="text"
                  step="any"
                  name="number"
                  placeholder="number"
                  defaultValue={1234}
                />
              </div>
            </div>
            <div className="flex my-2 border border-primary/50 overflow-x-scroll p-2 rounded">
              <div className="flex flex-col items-center justify-center">
                <label htmlFor="personal0">
                  <img
                    src="/assets/icons/bkash.png"
                    alt="personal"
                    style={{ height: 30 }}
                  />
                </label>
                <input
                  required=""
                  type="radio"
                  name="method"
                  id="edit-personal0"
                  defaultValue="/assets/icons/bkash.png"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <label htmlFor="agent1">
                  <img
                    src="/assets/icons/nagad.png"
                    alt="agent"
                    style={{ height: 30 }}
                  />
                </label>
                <input
                  required=""
                  type="radio"
                  name="method"
                  id="edit-agent1"
                  defaultValue="/assets/icons/nagad.png"
                  defaultChecked=""
                />
              </div>
            </div>
            <div className="bg-green-800 text-white  flex items-center p-2 text-sm rounded-t">
              <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                Bonus Label
              </span>
              <input
                className="w-full p-1 bg-transparent focus:outline-none "
                type="text"
                step="any"
                name="bonus_label"
                placeholder="Bonus Label"
                defaultValue="Bonus"
              />
            </div>
            <div className="bg-green-800 text-white  flex items-center p-2 text-sm rounded-b">
              <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                Bonus Rate
              </span>
              <input
                className="w-full p-1 bg-transparent focus:outline-none "
                type="text"
                step="any"
                name="bonus_rate"
                placeholder="Bonus Rate"
                defaultValue={0}
              />
            </div>
            <div className="mb-5">
              <div className="bg-green-800 text-white flex items-center p-2 mt-1 rounded text-sm">
                <span className="w-[120px] ml-2">For</span>
                <select
                  name="for"
                  className="block w-full p-2 bg-transparent rounded appearance-none focus:outline-none"
                >
                  <option value="" disabled="">
                    --- Select ---
                  </option>
                  <option className="text-gray-700" value="both">
                    Both
                  </option>
                  <option className="text-gray-700" value="deposit">
                    Deposit
                  </option>
                  <option className="text-gray-700" value="withdraw">
                    Withdraw
                  </option>
                </select>
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

export default EditPayment;
