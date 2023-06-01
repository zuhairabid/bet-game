import React from "react";
// import "./settings.css";

function Settings() {
  return (
    <div>
      <div className=" py-1  text-center text-[24px] tetext-white bg-fuchsia-800 text-white">
        Manage Settings
      </div>

      <div className="bg-white px-2"></div>
      <div>
        <div className="overflow-scroll  border border-admin-primary/20 shadow rounded">
          <table className="min-w-full whitespace-nowrap text-center divide-y divide-gray-200 table-striped ">
            <thead className="text-center bg-orange-950 text-white">
              <tr>
                <th className="p-4">#</th>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  Setting Name
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  Min
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  Max
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  Time/Hours
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  On/Off
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  save
                </td>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-admin-primary odd-bg-gray">
              <tr className="hover:bg-gray-100 ">
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                  1
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  deposit
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]">
                  <div className="my-2">
                    <span className="text-gray-900 text-sm" />
                    <input
                      type="number"
                      step="any"
                      name="min"
                      required=""
                      className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
                      defaultValue={20}
                    />
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]">
                  <div className="my-2">
                    <span className="text-gray-900 text-sm" />
                    <input
                      type="number"
                      step="any"
                      name="max"
                      required=""
                      className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
                      defaultValue={5000}
                    />
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]">
                  <div className="my-2">
                    <span className="text-gray-900 text-sm" />
                    <input
                      type="number"
                      step="any"
                      name="interval"
                      required=""
                      className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
                      defaultValue={0}
                    />
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <div>
                    <button
                      className="bg-admin-primary text-white   px-1 my-[2px] admin-game-btn shadow-lg undefined "
                      type="button"
                      style={{
                        transition: "all 0.1s ease 0s",
                        width: 35,
                        height: 35,
                      }}
                    >
                      On
                    </button>
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <button
                    type="submit"
                    className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-green-800 rounded hover:bg-green-800/70 text-theme-light "
                  >
                    Save
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-100 ">
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                  2
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  withdraw
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]">
                  <div className="my-2">
                    <span className="text-gray-900 text-sm" />
                    <input
                      type="number"
                      step="any"
                      name="min"
                      required=""
                      className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
                      defaultValue={20}
                    />
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]">
                  <div className="my-2">
                    <span className="text-gray-900 text-sm" />
                    <input
                      type="number"
                      step="any"
                      name="max"
                      required=""
                      className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
                      defaultValue={5000}
                    />
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]">
                  <div className="my-2">
                    <span className="text-gray-900 text-sm" />
                    <input
                      type="number"
                      step="any"
                      name="interval"
                      required=""
                      className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
                      defaultValue={0}
                    />
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <div>
                    <button
                      className=" bg-gray-200 text-gray-700   px-1 my-[2px] admin-game-btn shadow-lg undefined "
                      type="button"
                      style={{
                        transition: "all 0.1s ease 0s",
                        width: 35,
                        height: 35,
                      }}
                    >
                      Off
                    </button>
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <button
                    type="submit"
                    className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-green-800 rounded hover:bg-green-800/70 text-theme-light "
                  >
                    Save
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-100 ">
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                  3
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  club-withdraw
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]">
                  <div className="my-2">
                    <span className="text-gray-900 text-sm" />
                    <input
                      type="number"
                      step="any"
                      name="min"
                      required=""
                      className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
                      defaultValue={20}
                    />
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]">
                  <div className="my-2">
                    <span className="text-gray-900 text-sm" />
                    <input
                      type="number"
                      step="any"
                      name="max"
                      required=""
                      className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
                      defaultValue={5000}
                    />
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]">
                  <div className="my-2">
                    <span className="text-gray-900 text-sm" />
                    <input
                      type="number"
                      step="any"
                      name="interval"
                      required=""
                      className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
                      defaultValue={0}
                    />
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <div>
                    <button
                      className="bg-admin-primary text-white   px-1 my-[2px] admin-game-btn shadow-lg undefined "
                      type="button"
                      style={{
                        transition: "all 0.1s ease 0s",
                        width: 35,
                        height: 35,
                      }}
                    >
                      On
                    </button>
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <button
                    type="submit"
                    className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-green-800 rounded hover:bg-green-800/70 text-theme-light "
                  >
                    Save
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-100 ">
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                  4
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  bet
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]">
                  <div className="my-2">
                    <span className="text-gray-900 text-sm" />
                    <input
                      type="number"
                      step="any"
                      name="min"
                      required=""
                      className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
                      defaultValue={20}
                    />
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]">
                  <div className="my-2">
                    <span className="text-gray-900 text-sm" />
                    <input
                      type="number"
                      step="any"
                      name="max"
                      required=""
                      className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
                      defaultValue={5000}
                    />
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]" />
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <div>
                    <button
                      className="bg-admin-primary text-white   px-1 my-[2px] admin-game-btn shadow-lg undefined "
                      type="button"
                      style={{
                        transition: "all 0.1s ease 0s",
                        width: 35,
                        height: 35,
                      }}
                    >
                      On
                    </button>
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <button
                    type="submit"
                    className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-green-800 rounded hover:bg-green-800/70 text-theme-light "
                  >
                    Save
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-100 ">
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                  5
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  user-sponsor-rate
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]">
                  <div className="my-2">
                    <span className="text-gray-900 text-sm" />
                    <input
                      type="number"
                      step="any"
                      name="min"
                      required=""
                      className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
                      defaultValue="0.5"
                    />
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]" />
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]" />
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <div>
                    <button
                      className="bg-admin-primary text-white   px-1 my-[2px] admin-game-btn shadow-lg undefined "
                      type="button"
                      style={{
                        transition: "all 0.1s ease 0s",
                        width: 35,
                        height: 35,
                      }}
                    >
                      On
                    </button>
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <button
                    type="submit"
                    className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-green-800 rounded hover:bg-green-800/70 text-theme-light "
                  >
                    Save
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-100 ">
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                  6
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  club-commission-rate
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]">
                  <div className="my-2">
                    <span className="text-gray-900 text-sm" />
                    <input
                      type="number"
                      step="any"
                      name="min"
                      required=""
                      className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
                      defaultValue={2}
                    />
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]" />
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]" />
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <div>
                    <button
                      className="bg-admin-primary text-white   px-1 my-[2px] admin-game-btn shadow-lg undefined "
                      type="button"
                      style={{
                        transition: "all 0.1s ease 0s",
                        width: 35,
                        height: 35,
                      }}
                    >
                      On
                    </button>
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <button
                    type="submit"
                    className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-green-800 rounded hover:bg-green-800/70 text-theme-light "
                  >
                    Save
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-100 ">
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                  7
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  min-balance-to-keep-in-account
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]">
                  <div className="my-2">
                    <span className="text-gray-900 text-sm" />
                    <input
                      type="number"
                      step="any"
                      name="min"
                      required=""
                      className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
                      defaultValue={20}
                    />
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]" />
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]" />
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <div>
                    <button
                      className="bg-admin-primary text-white   px-1 my-[2px] admin-game-btn shadow-lg undefined "
                      type="button"
                      style={{
                        transition: "all 0.1s ease 0s",
                        width: 35,
                        height: 35,
                      }}
                    >
                      On
                    </button>
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <button
                    type="submit"
                    className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-green-800 rounded hover:bg-green-800/70 text-theme-light "
                  >
                    Save
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-100 ">
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                  8
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  min-balance-to-keep-in-club
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]">
                  <div className="my-2">
                    <span className="text-gray-900 text-sm" />
                    <input
                      type="number"
                      step="any"
                      name="min"
                      required=""
                      className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
                      defaultValue={20}
                    />
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]" />
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]" />
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <div>
                    <button
                      className="bg-admin-primary text-white   px-1 my-[2px] admin-game-btn shadow-lg undefined "
                      type="button"
                      style={{
                        transition: "all 0.1s ease 0s",
                        width: 35,
                        height: 35,
                      }}
                    >
                      On
                    </button>
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <button
                    type="submit"
                    className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-green-800 rounded hover:bg-green-800/70 text-theme-light "
                  >
                    Save
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-100 ">
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                  9
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  user-to-super-only-balance-trancefer
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]">
                  <div className="my-2">
                    <span className="text-gray-900 text-sm" />
                    <input
                      type="number"
                      step="any"
                      name="min"
                      required=""
                      className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
                      defaultValue={20}
                    />
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]">
                  <div className="my-2">
                    <span className="text-gray-900 text-sm" />
                    <input
                      type="number"
                      step="any"
                      name="max"
                      required=""
                      className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
                      defaultValue={20000}
                    />
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]">
                  <div className="my-2">
                    <span className="text-gray-900 text-sm" />
                    <input
                      type="number"
                      step="any"
                      name="interval"
                      required=""
                      className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
                      defaultValue={0}
                    />
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <div>
                    <button
                      className="bg-admin-primary text-white   px-1 my-[2px] admin-game-btn shadow-lg undefined "
                      type="button"
                      style={{
                        transition: "all 0.1s ease 0s",
                        width: 35,
                        height: 35,
                      }}
                    >
                      On
                    </button>
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <button
                    type="submit"
                    className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-green-800 rounded hover:bg-green-800/70 text-theme-light "
                  >
                    Save
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-100 ">
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                  10
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  super-to-user-balance-trancefer
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]">
                  <div className="my-2">
                    <span className="text-gray-900 text-sm" />
                    <input
                      type="number"
                      step="any"
                      name="min"
                      required=""
                      className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
                      defaultValue={20}
                    />
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]">
                  <div className="my-2">
                    <span className="text-gray-900 text-sm" />
                    <input
                      type="number"
                      step="any"
                      name="max"
                      required=""
                      className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
                      defaultValue={2000}
                    />
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]">
                  <div className="my-2">
                    <span className="text-gray-900 text-sm" />
                    <input
                      type="number"
                      step="any"
                      name="interval"
                      required=""
                      className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
                      defaultValue={0}
                    />
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <div>
                    <button
                      className="bg-admin-primary text-white   px-1 my-[2px] admin-game-btn shadow-lg undefined "
                      type="button"
                      style={{
                        transition: "all 0.1s ease 0s",
                        width: 35,
                        height: 35,
                      }}
                    >
                      On
                    </button>
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <button
                    type="submit"
                    className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-green-800 rounded hover:bg-green-800/70 text-theme-light "
                  >
                    Save
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-100 ">
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                  11
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  user-to-user-balance-trancefer
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]">
                  <div className="my-2">
                    <span className="text-gray-900 text-sm" />
                    <input
                      type="number"
                      step="any"
                      name="min"
                      required=""
                      className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
                      defaultValue={20}
                    />
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]">
                  <div className="my-2">
                    <span className="text-gray-900 text-sm" />
                    <input
                      type="number"
                      step="any"
                      name="max"
                      required=""
                      className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
                      defaultValue={2000}
                    />
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]">
                  <div className="my-2">
                    <span className="text-gray-900 text-sm" />
                    <input
                      type="number"
                      step="any"
                      name="interval"
                      required=""
                      className="w-full min-w-[100px] mt-1 text-sm bg-green-800/10 border border-gray-200 text-gray-500 rounded px-4 py-2 appearance-none focus:outline-0"
                      defaultValue={0}
                    />
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <div>
                    <button
                      className=" bg-gray-200 text-gray-700   px-1 my-[2px] admin-game-btn shadow-lg undefined "
                      type="button"
                      style={{
                        transition: "all 0.1s ease 0s",
                        width: 35,
                        height: 35,
                      }}
                    >
                      Off
                    </button>
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <button
                    type="submit"
                    className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-green-800 rounded hover:bg-green-800/70 text-theme-light "
                  >
                    Save
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-100 ">
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                  12
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  cashout
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]" />
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]" />
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-[100px]" />
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <div>
                    <button
                      className="bg-admin-primary text-white   px-1 my-[2px] admin-game-btn shadow-lg undefined "
                      type="button"
                      style={{
                        transition: "all 0.1s ease 0s",
                        width: 35,
                        height: 35,
                      }}
                    >
                      On
                    </button>
                  </div>
                </td>
                <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <button
                    type="submit"
                    className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-green-800 rounded hover:bg-green-800/70 text-theme-light "
                  >
                    Save
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex-center-center pb-10" />
      </div>
    </div>
  );
}

export default Settings;
