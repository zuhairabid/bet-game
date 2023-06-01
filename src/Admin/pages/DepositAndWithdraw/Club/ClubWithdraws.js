import React from "react";

function ClubWithdraws() {
  return (
    <div>
      <div>
        <div className=" py-1  text-center text-[24px] text-primary bg-admin-secondary text-white">
          Manage User Deposits
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
          </div>
          <div>
            <div className="flex items-center py-3">
              <div className="flex-center-center">
                <input
                  type="checkbox"
                  id="toogle-button-/admin/deposit/selected-action"
                  defaultChecked=""
                />
                <label
                  htmlFor="toogle-button-/admin/deposit/selected-action"
                  className="ml-2"
                >
                  Toggle all
                </label>
              </div>
              <div className="ml-3 h-[35px] flex-center-center">
                <button
                  title="approve"
                  className="bg-green-600 text-white p-2 rounded-lg "
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 16 16"
                    fontSize={18}
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z" />
                    <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z" />
                  </svg>
                </button>
                <button
                  title="reject"
                  className="ml-2 bg-red-600 text-white p-2 rounded-lg "
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={0}
                    viewBox="0 0 15 15"
                    fontSize={18}
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="overflow-scroll  border border-admin-primary/20 shadow rounded">
              <table className="min-w-full whitespace-nowrap text-center divide-y divide-gray-200 table-striped ">
                <thead className="text-center bg-orange-950/90 text-white">
                  <tr>
                    <th className="p-4">#</th>
                    <td className="px-2 font-medium tracking-wider   md:px-1 ">
                      Req-By
                    </td>
                    <td className="px-2 font-medium tracking-wider   md:px-1 ">
                      Amount
                    </td>
                    <td className="px-2 font-medium tracking-wider   md:px-1 ">
                      From
                    </td>
                    <td className="px-2 font-medium tracking-wider   md:px-1 ">
                      To
                    </td>
                    <td className="px-2 font-medium tracking-wider   md:px-1 ">
                      Method
                    </td>
                    <td className="px-2 font-medium tracking-wider   md:px-1 ">
                      Date
                    </td>
                    <td className="px-2 font-medium tracking-wider   md:px-1 ">
                      Status
                    </td>
                    <td className="px-2 font-medium tracking-wider   md:px-1 ">
                      Action
                    </td>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-admin-primary odd-bg-gray" />
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

export default ClubWithdraws;
