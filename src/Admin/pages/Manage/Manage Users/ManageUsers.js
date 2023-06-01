import React from "react";
import EditUsers from "./components/EditUsers";
import ModalAnimated from "../../../Components/ModalAnimated";
import { ModalState } from "../../../Contexts/ModalContext";

function ManageUsers() {
  const { setShowComponent, setShowModal } = ModalState();
  return (
    <div>
      <ModalAnimated />
      <div>
        <div className=" py-1  text-center text-[24px] text-primary bg-admin-secondary text-white">
          Manage Users
        </div>
        <div className="bg-white px-2">
          <div className=" bg-green-800 text-white flex items-center p-2 mt-1 rounded text-sm">
            <span className="w-[120px] ml-2">Select Club:</span>
            <select
              required=""
              name="club_id"
              className="block w-full p-2 bg-transparent rounded appearance-none focus:outline-none"
            >
              <option value="">--- Select ---</option>
              <option value={3} className="text-gray-700">
                BplT20 Official Club
              </option>
              <option value={1} className="text-gray-700">
                365 Club
              </option>
              <option value={2} className="text-gray-700">
                Club2
              </option>
            </select>
          </div>
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
                <thead className="text-center  bg-orange-950/90 text-white">
                  <tr>
                    <th className="p-4">#</th>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Username
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Phone
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Balance
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Sponsor
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Sponsor Rate
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Club
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Is Super ID
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Is Active
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Balance transfer
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Withdraw limit
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Deposit limit
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Actions
                    </td>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-admin-primary odd-bg-gray">
                  <tr className="hover:bg-gray-100">
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                      1
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      developer
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      01901901901
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      ৳ 0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 " />
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      BplT20 Official Club
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Normal
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Active
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      On
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <span>Min: 0</span> <br />
                      <span>Max: 0</span>
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <span>Min: 0</span> <br />
                      <span>Max: 0</span>
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 flex flex-col items-center  ">
                      <button
                        className="rounded bg-orange-600 px-3 py-2 text-white"
                        onClick={() => {
                          setShowModal(true);
                          setShowComponent(<EditUsers />);
                        }}
                      >
                        <span className="flex-center-center">Edit</span>
                      </button>
                      <button className="flex-center-center bg-orange-600 text-white py-2 px-2 mt-1 mb-3 rounded">
                        Login
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                      2
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      developer2
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      01827910918
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      ৳ 0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 " />
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      BplT20 Official Club
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Normal
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Active
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      On
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <span>Min: 0</span> <br />
                      <span>Max: 0</span>
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <span>Min: 0</span> <br />
                      <span>Max: 0</span>
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1  flex flex-col items-center justify-center">
                      <button
                        className="rounded bg-orange-600 px-3 py-2 text-white"
                        onClick={() => {
                          setShowModal(true);
                          setShowComponent(<EditUsers />);
                        }}
                      >
                        <span className="flex-center-center">Edit</span>
                      </button>
                      <button className="flex-center-center bg-orange-600 text-white py-2 px-2 mt-1 mb-3 rounded">
                        Login
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                      3
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      BPLT20
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      01700000000
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      ৳ 0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 " />
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      BplT20 Official Club
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Super ID
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Active
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      On
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <span>Min: 0</span> <br />
                      <span>Max: 0</span>
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <span>Min: 0</span> <br />
                      <span>Max: 0</span>
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1  flex flex-col items-center justify-center">
                      <button
                        className="rounded bg-orange-600 px-3 py-2 text-white"
                        onClick={() => {
                          setShowModal(true);
                          setShowComponent(<EditUsers />);
                        }}
                      >
                        <span className="flex-center-center">Edit</span>
                      </button>
                      <button className="flex-center-center bg-orange-600 text-white py-2 px-2 mt-1 mb-3 rounded">
                        Login
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                      4
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Admin
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      01900000000
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      ৳ 0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      BPLT20
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      BplT20 Official Club
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Normal
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Active
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      On
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <span>Min: 0</span> <br />
                      <span>Max: 0</span>
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <span>Min: 0</span> <br />
                      <span>Max: 0</span>
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1  flex flex-col items-center justify-center">
                      <button
                        className="rounded bg-orange-600 px-3 py-2 text-white"
                        onClick={() => {
                          setShowModal(true);
                          setShowComponent(<EditUsers />);
                        }}
                      >
                        <span className="flex-center-center">Edit</span>
                      </button>
                      <button className="flex-center-center bg-orange-600 text-white py-2 px-2 mt-1 mb-3 rounded">
                        Login
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                      5
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      zuhair12
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      01969724749
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      ৳ 0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 " />
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      365 Club
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Normal
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Active
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      On
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <span>Min: 0</span> <br />
                      <span>Max: 0</span>
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <span>Min: 0</span> <br />
                      <span>Max: 0</span>
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1  flex flex-col items-center justify-center">
                      <button
                        className="rounded bg-orange-600 px-3 py-2 text-white"
                        onClick={() => {
                          setShowModal(true);
                          setShowComponent(<EditUsers />);
                        }}
                      >
                        <span className="flex-center-center">Edit</span>
                      </button>
                      <button className="flex-center-center bg-orange-600 text-white py-2 px-2 mt-1 mb-3 rounded">
                        Login
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                      6
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Hamim
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      01955393810
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      ৳ 0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 " />
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      365 Club
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Normal
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Active
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      On
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <span>Min: 0</span> <br />
                      <span>Max: 0</span>
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <span>Min: 0</span> <br />
                      <span>Max: 0</span>
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1  flex flex-col items-center justify-center">
                      <button
                        className="rounded bg-orange-600 px-3 py-2 text-white"
                        onClick={() => {
                          setShowModal(true);
                          setShowComponent(<EditUsers />);
                        }}
                      >
                        <span className="flex-center-center">Edit</span>
                      </button>
                      <button className="flex-center-center bg-orange-600 text-white py-2 px-2 mt-1 mb-3 rounded">
                        Login
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
                <li className="px-2 mx-0.5 rounded border border-primary cursor-pointer  bg-green-800/20">
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

export default ManageUsers;
