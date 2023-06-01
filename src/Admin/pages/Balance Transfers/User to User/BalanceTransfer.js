import React from "react";

function BalanceTransfer() {
  return (
    <div>
      <main>
        <div className=" py-1  text-center text-[24px] text-primary bg-admin-secondary text-white">
          User To User Balance Transfer
        </div>
        <form className="bg-white m-2 p-3">
          <div className="my-2">
            <span className="text-gray-900 text-sm">Amount</span>
            <input
              type="number"
              step="any"
              name="amount"
              required=""
              placeholder="Amount"
              className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
              defaultValue=""
            />
          </div>
          <div className="my-2">
            <span className="text-gray-900 text-sm">From Username</span>
            <input
              type="text"
              step="any"
              name="from_username"
              required=""
              placeholder="From Username"
              className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
              defaultValue=""
            />
          </div>
          <div className="my-2">
            <span className="text-gray-900 text-sm">To Username</span>
            <input
              type="text"
              step="any"
              name="to_username"
              required=""
              placeholder="To Username"
              className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
              defaultValue=""
            />
          </div>
          <button
            type="submit"
            className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-green-800 rounded hover:bg-green-800/70 text-theme-light "
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}

export default BalanceTransfer;
