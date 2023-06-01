import React from "react";

function DefaultQuestion() {
  return (
    <div>
      <div>
        <div className=" py-1  text-center text-[24px] text-primary bg-admin-secondary text-white">
          Default Questions
        </div>
        <div className="bg-white px-2">
          <form>
            <div className="bg-green-800 text-white flex items-center p-2 mt-1 rounded text-sm">
              <span className="w-[120px] ml-2">Game Name</span>
              <select
                required=""
                name="game_name"
                className="block w-full p-2 bg-transparent rounded appearance-none focus:outline-none"
              >
                <option value="" disabled="">
                  --- Select ---
                </option>
                <option value="cricket">cricket</option>
                <option value="football">football</option>
                <option value="Cricket Others Options">
                  Cricket Others Options
                </option>
                <option value="T10 Cricket">T10 Cricket</option>
                <option value="Womens Cricket">Womens Cricket</option>
                <option value="LPL">LPL</option>
                <option value="MLC">MLC</option>
                <option value="T20 Blast">T20 Blast</option>
                <option value="Table Tennis">Table Tennis</option>
                <option value="Basketball">Basketball</option>
                <option value="Badminton">Badminton</option>
              </select>
            </div>
            <div className="bg-green-800 text-white  flex items-center p-2 text-sm undefined">
              <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                Question
              </span>
              <input
                className="w-full p-1 bg-transparent focus:outline-none "
                step="any"
                name="question"
                placeholder="Question"
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
              <span className="mx-1 text-primary/70">Date:</span>
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
                    <td>game name</td>
                    <td>question</td>
                    <td>actions</td>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-admin-primary odd-bg-gray">
                  <tr className="hover:bg-gray-100">
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                      2
                    </td>
                    <td>cricket</td>
                    <td>To Win The Toss</td>
                    <td>
                      <form>
                        <button
                          type="submit"
                          className="bg-red-500 rounded text-white px-2 py-1 "
                        >
                          Delete
                        </button>
                      </form>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                      3
                    </td>
                    <td>cricket</td>
                    <td>To Win The Match</td>
                    <td>
                      <form>
                        <button
                          type="submit"
                          className="bg-red-500 rounded text-white px-2 py-1 "
                        >
                          Delete
                        </button>
                      </form>
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
                <li className="px-2 mx-0.5 rounded border border-primary cursor-pointer bg-green-800/20">
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

export default DefaultQuestion;
