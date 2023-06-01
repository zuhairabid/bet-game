import React from "react";

function ClosedGames() {
  return (
    <div>
      <div>
        <div className=" py-1  text-center text-[24px] text-primary bg-admin-secondary text-white">
          Closed Game History
        </div>
        <div className="bg-white px-2">
          <div className="flex flex-col items-end my-2 p-1">
            <div className="bg-gray-100 shadow w-full css-totxjd">
              <div className="css-1iz4iln">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
                </svg>
              </div>
              <div className="MuiInputBase-root MuiInputBase-colorPrimary w-full css-en6bwu">
                <input
                  placeholder="Search…"
                  type="text"
                  aria-label="search"
                  className="MuiInputBase-input css-mnn31"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="mt-1 w-full flex items-center justify-end">
              <span className="mx-1 text-white/70">Date:</span>
              <input
                type="date"
                placeholder="Date"
                className="bg-transparent border border-gray-100 shadow bg-white rounded p-1 w-1/2 float-right focus:outline-none"
                defaultValue=""
              />
            </div>
          </div>
          <div>
            <div className="overflow-scroll  border border-admin-primary/20 shadow rounded">
              <table className="min-w-full whitespace-nowrap text-center divide-y divide-gray-200 table-striped ">
                <thead className="text-center bg-orange-950/90 text-white">
                  <tr>
                    <th className="p-4">#</th>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Game
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Total questions
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Total answer
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Total bets
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Closed on
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Actions
                    </td>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-orange-950 odd-bg-gray">
                  <tr className="hover:bg-gray-100">
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                      1
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Dbhd<span className="text-yellow-500 mx-1">vs</span>Dhgd
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      1
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      1
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      2023-05-25 11:04:35
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <button className="text-white bg-green-500 p-2">
                        back live
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                      3
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Bangladesh<span className="text-yellow-500 mx-1">vs</span>
                      India
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      2023-05-25 01:58:26
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <button className="text-white bg-green-500 p-2">
                        back live
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                      12
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      France<span className="text-yellow-500 mx-1">vs</span>
                      Belgium
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      2023-05-26 03:41:21
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <button className="text-white bg-green-500 p-2">
                        back live
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                      13
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Spain<span className="text-yellow-500 mx-1">vs</span>Italy
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      2023-05-26 03:41:24
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <button className="text-white bg-green-500 p-2">
                        back live
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                      14
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Uruguay<span className="text-yellow-500 mx-1">vs</span>
                      Senegal
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      2023-05-26 03:41:26
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <button className="text-white bg-green-500 p-2">
                        back live
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                      15
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Mexico<span className="text-yellow-500 mx-1">vs</span>
                      Portugal
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      2023-05-26 03:41:29
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <button className="text-white bg-green-500 p-2">
                        back live
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                      16
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Morocco<span className="text-yellow-500 mx-1">vs</span>
                      Japan
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      2023-05-26 03:41:32
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <button className="text-white bg-green-500 p-2">
                        back live
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                      17
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Manchester City
                      <span className="text-yellow-500 mx-1">vs</span>
                      Real Madrid
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      2023-05-26 03:41:36
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <button className="text-white bg-green-500 p-2">
                        back live
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                      19
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Cricket<span className="text-yellow-500 mx-1">vs</span>
                      Cricket 1
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      2
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      2
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      2023-05-26 03:49:52
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <button className="text-white bg-green-500 p-2">
                        back live
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex-center-center pb-10">
              <ul
                className="flex mt-3 cursor-pointer"
                role="navigation"
                aria-label="Pagination"
              >
                <li className="flex-center-center cursor-pointer  disabled">
                  <a
                    className=" "
                    tabIndex={-1}
                    role="button"
                    aria-disabled="true"
                    aria-label="Previous page"
                    rel="prev"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      version={1}
                      viewBox="0 0 48 48"
                      enableBackground="new 0 0 48 48"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon
                        fill="#2196F3"
                        points="30.9,43 34,39.9 18.1,24 34,8.1 30.9,5 12,24"
                      />
                    </svg>
                  </a>
                </li>
                <li className="px-2 mx-0.5 rounded border border-primary cursor-pointer bg-primary/20">
                  <a
                    rel="canonical"
                    role="button"
                    tabIndex={-1}
                    aria-label="Page 1 is your current page"
                    aria-current="page"
                  >
                    1
                  </a>
                </li>
                <li className="flex-center-center disabled">
                  <a
                    className=" "
                    tabIndex={-1}
                    role="button"
                    aria-disabled="true"
                    aria-label="Next page"
                    rel="next"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      version={1}
                      viewBox="0 0 48 48"
                      enableBackground="new 0 0 48 48"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon
                        fill="#2196F3"
                        points="17.1,5 14,8.1 29.9,24 14,39.9 17.1,43 36,24"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClosedGames;
