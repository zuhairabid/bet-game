import React from "react";
import { ModalState } from "../../Contexts/ModalContext";
import AddClub from "./components/AddClub";
import ModalAnimated from "../../Components/ModalAnimated";

function ManageClubs() {
  const { setShowModal, setShowComponent } = ModalState();
  return (
    <div>
      <ModalAnimated />
      <div className=" py-1  text-center text-[24px] text-primary bg-fuchsia-900 text-white">
        Manage Clubs
      </div>
      <div className="p-3">
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
            <div className="bg-gray-100 shadow w-full css-totxjd flex items-center p-1">
              <div className="css-1iz4iln flex">
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
              <div className="MuiInputBase-root MuiInputBase-colorPrimary w-full css-en6bwu p-2">
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
          <table className="w-full">
            <thead class="text-center bg-orange-950 text-white">
              <tr>
                <th class="p-4">#</th>
                <td class="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  Name
                </td>
                <td class="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  Balance
                </td>
                <td class="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  User count
                </td>
                <td class="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  User balance
                </td>
                <td class="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  Owner Email
                </td>
                <td class="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  Owner Phone
                </td>
                <td class="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  Is Active
                </td>
                <td class="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  Commission rate
                </td>
                <td class="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  Withdraw limit
                </td>
                <td class="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  Actions
                </td>
              </tr>
            </thead>
            <tbody className="text-black">
              <tr class="hover:bg-gray-100">
                <td class="px-5 text-xs font-medium tracking-wider   md:px-1 w-4 p-4">
                  3
                </td>
                <td class="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  BplT20 Official Club
                </td>
                <td class="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  ৳1000000
                </td>
                <td class="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  4
                </td>
                <td class="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  0
                </td>
                <td class="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  BplT20@gmail.com
                </td>
                <td class="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  01901802001
                </td>
                <td class="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  Active
                </td>
                <td class="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  2
                </td>
                <td class="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <span>Min: 10</span> <br />
                  <span>Max: 20</span>
                </td>
                <td class="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                  <button class="rounded bg-orange-600 px-3 py-2 text-white">
                    <span class="flex-center-center">Edit</span>
                  </button>
                  <button class="flex-center-center bg-orange-600 text-white px-3 py-2 mt-1 mb-3 rounded">
                    Login
                  </button>
                </td>
              </tr>
              {/* <tr>
                <td>4</td>
                <td>
                  {" "}
                  <img src={bkashImg} width={100} />
                </td>
                <td>both</td>
                <td>bkash</td>
                <td>1234</td>
                <td>Bonus</td>
                <td>0</td>
                <td className="text-white">
                  {" "}
                  <button className="bg-green-700 p-1 rounded-md mr-2">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  <button className="bg-red-700 p-1 rounded-md">
                    {" "}
                    <FontAwesomeIcon icon={faTrash} className="h-100" />{" "}
                  </button>
                </td>
                <td>Created after Edit</td>
                <td>admin@super</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  {" "}
                  <img src={nagadImg} width={100} />
                </td>
                <td>both</td>
                <td>nagad</td>
                <td>1234</td>
                <td>Bonus</td>
                <td>0</td>
                <td className="text-white">
                  {" "}
                  <button className="bg-green-700 p-1 rounded-md mr-2">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  <button className="bg-red-700 p-1 rounded-md">
                    {" "}
                    <FontAwesomeIcon icon={faTrash} className="h-100" />{" "}
                  </button>
                </td>
                <td>Created after Edit</td>
                <td>admin@super</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageClubs;
