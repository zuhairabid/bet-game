import React from "react";
import AddClub from "./components/AddClub";
import ModalAnimated from "../../../Components/ModalAnimated";
import EditCLub from "./components/EditCLub";
import { ModalState } from "../../../Contexts/ModalContext";

function ManageClubs() {
  const { setShowComponent, setShowModal } = ModalState();
  return (
    <div>
      <ModalAnimated />
      <div>
        <div className=" py-1  text-center text-[24px] text-primary bg-admin-secondary text-white">
          Manage Clubs
        </div>
        <div className="bg-white px-2">
          <div className="pt-2">
            <button
              className="bg-green-500 text-white flex-center-center px-3 py-2 rounded shadow"
              onClick={() => {
                setShowModal(true);
                setShowComponent(<AddClub />);
              }}
            >
              + Add Club
            </button>
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
          </div>
          <div>
            <div className="overflow-scroll  border border-admin-primary/20 shadow rounded">
              <table className="min-w-full whitespace-nowrap text-center divide-y divide-gray-200 table-striped ">
                <thead className="text-center bg-orange-950/90 text-white">
                  <tr>
                    <th className="p-4">#</th>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Name
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Balance
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      User count
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      User balance
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Owner Email
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Owner Phone
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Is Active
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Commission rate
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Withdraw limit
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Actions
                    </td>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-admin-primary odd-bg-gray">
                  <tr className="hover:bg-gray-100">
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                      3
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      BplT20 Official Club
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      ৳1000000
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      4
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      BplT20@gmail.com
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      01901802001
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Active
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      2
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <span>Min: 10</span> <br />
                      <span>Max: 20</span>
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <button
                        className="rounded bg-orange-600 px-3 py-2 text-white"
                        onClick={() => {
                          setShowModal(true);
                          setShowComponent(<EditCLub />);
                        }}
                      >
                        <span className="flex-center-center">Edit</span>
                      </button>
                      <button className="flex-center-center bg-orange-600 text-white px-3 py-2 mt-1 mb-3 rounded">
                        Login
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                      1
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      365 Club
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      ৳0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      2
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      365@gmail.com
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      66602001
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Active
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      2
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <span>Min: 10</span> <br />
                      <span>Max: 10000</span>
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <button
                        className="rounded bg-orange-600 px-3 py-2 text-white"
                        onClick={() => {
                          setShowModal(true);
                          setShowComponent(<EditCLub />);
                        }}
                      >
                        <span className="flex-center-center">Edit</span>
                      </button>
                      <button className="flex-center-center bg-orange-600 text-white px-3 py-2 mt-1 mb-3 rounded">
                        Login
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100">
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                      2
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Club2
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      ৳0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      0
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Club2@gmail.com
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      01872801927
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      Active
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      2
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <span>Min: 10</span> <br />
                      <span>Max: 10000</span>
                    </td>
                    <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                      <button
                        className="rounded bg-orange-600 px-3 py-2 text-white"
                        onClick={() => {
                          setShowModal(true);
                          setShowComponent(<EditCLub />);
                        }}
                      >
                        <span className="flex-center-center">Edit</span>
                      </button>
                      <button className="flex-center-center bg-orange-600 text-white px-3 py-2 mt-1 mb-3 rounded">
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

export default ManageClubs;
