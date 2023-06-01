import React from "react";
import ModalAnimated from "../../Components/ModalAnimated";
import nagadImg from "./img/nagad.jpg";
import bkashImg from "./img/bkash.jpg";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PaymentMethod() {
  return (
    <div>
      {/* <ModalAnimated /> */}
      <div className="bg-green-200 text-green-500 text-3xl text-center p-3">
        Add New
      </div>
      <div className="px-2 text-white space-y-3 my-3 [&>div]:rounded [&>div]:p-3">
        <div className="bg-green-800 [&>div>p]:w-20 [&>div>input]:bg-transparent  ">
          <div className="flex">
            <p>Name</p>
            <input type="text" placeholder="text" />
          </div>
          <div className="flex">
            <p>Number</p>
            <input type="text" placeholder="number" />
          </div>
        </div>

        <form className="flex p-3 border border-black ">
          <div className="flex-col items-center justify-center text-center">
            <label for="html">
              <img src={bkashImg} alt="" width={100} />
            </label>
              <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
          </div>
          <div className="flex-col items-center justify-center text-center">
            <label for="html">
              <img src={nagadImg} alt="" width={100} />
            </label>
              <input type="radio" id="html" name="fav_language" value="HTML" /> {" "}
          </div>
        </form>
        <div className="bg-green-800 ">
          <div className="flex">
            <p className="w-24">Bonus Label</p>
            <input type="text" placeholder="Bonus Label" />
          </div>
          <div className="flex">
            <p className="w-24">Bonus Rate</p>
            <input type="text" placeholder="Bonus Rate" />
          </div>
        </div>
        <div className="flex bg-green-800">
          <p className="w-24">For</p>
          <select name="" id="" className="w-24 text-black">
            <option>Both</option>
            <option>Withdraw</option>
            <option>Deposit</option>
          </select>
        </div>
        <button className="bg-green-800 text-center font-bold p-3 w-full">
          Submit
        </button>
        <div>
          <table className="w-full">
            <thead className="text-white bg-yellow-950">
              <tr>
                <td>#</td>
                <td>Image</td>
                <td>For</td>
                <td>Name</td>
                <td>Number</td>
                <td>Bonus Label</td>
                <td>Bonus Rate</td>
                <td>Actions</td>
                <td>Action</td>
                <td>Action By</td>
              </tr>
            </thead>
            <tbody className="text-black">
              <tr>
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
