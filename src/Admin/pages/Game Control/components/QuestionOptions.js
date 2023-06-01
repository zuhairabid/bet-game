import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function QuestionOptions({ option, rate }) {
  const [showResult, setShowResult] = useState(false);
  const [showActions, setSHowActions] = useState(false);
  return (
    <tr className="z-[10]">
      <td>{option}</td>
      <td>{rate}</td>
      <td></td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>0</td>
      <td>
        <div className="flex">
          <div className="relative">
            <div
              className={`bg-gray-200 ${
                showResult ? "absolute" : "hidden"
              } shadow-lg`}
              style={{ zIndex: 20, right: "100%", top: "-50%" }}
            >
              <FontAwesomeIcon
                onClick={() => setShowResult(!showResult)}
                icon={faClose}
                className="h-3 p-1 absolute top-[-15px] right-[-15px] text-black font-bold bg-white rounded-full cursor-pointer "
              />
              <div className="flex">
                <button
                  type="button"
                  className="inline-block px-5 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight  hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-0 active:bg-green-800 transition duration-150 ease-in-out"
                >
                  Win
                </button>
                <button
                  type="button"
                  className="inline-block px-5 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight  hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out"
                >
                  Lose
                </button>
              </div>
              <button
                type="button"
                className="inline-block mt-1 w-full px-3 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight  hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
              >
                Refund
              </button>
            </div>{" "}
            <button
              className="action-button "
              onClick={() => setShowResult(!showResult)}
            >
              Result{" "}
            </button>
          </div>
          <div className="relative">
            <div
              className={`bg-gray-200 p-3 ${
                showActions ? "absolute" : "hidden"
              } shadow-lg [&>div>button]:mx-1 [&>div>button]:p-1`}
              style={{ zIndex: 20, left: "-200%", top: "-100%" }}
            >
              <FontAwesomeIcon
                onClick={() => setSHowActions(!showActions)}
                icon={faClose}
                className="h-3 p-1 absolute top-[-15px] right-[-15px] text-black font-bold bg-white rounded-full cursor-pointer "
              />
              <div className="flex-center-center mb-2 ">
                <button
                  className="bg-orange-500 text-white  px-1 my-[2px] admin-game-btn shadow-lg undefined "
                  type="button"
                  style={{
                    transition: "all 0.1s ease 0s",
                    width: 60,
                    height: 30,
                  }}
                >
                  Show
                </button>
                <button
                  className="bg-orange-500 text-white  px-1 my-[2px] admin-game-btn shadow-lg undefined "
                  type="button"
                  style={{
                    transition: "all 0.1s ease 0s",
                    width: 60,
                    height: 30,
                  }}
                >
                  Bet
                </button>
              </div>
              <div className="flex-center-center">
                <button className="admin-game-btn bg-orange-600 text-white h-[30px]">
                  <span className="flex-center-center">Close</span>
                </button>
                <button className="admin-game-btn bg-orange-600 text-white h-[30px] ">
                  <span className="flex-center-center">Edit</span>
                </button>
              </div>
              <div className="flex-center-center">
                <button
                  className=" bg-gray-200 text-gray-700   px-1 my-[2px] admin-game-btn shadow-lg undefined "
                  type="button"
                  style={{
                    transition: "all 0.1s ease 0s",
                    width: 60,
                    height: 30,
                  }}
                >
                  C-off
                </button>
              </div>
            </div>

            <button
              className="action-button z-[-10]"
              onClick={() => setSHowActions(!showActions)}
            >
              Actions
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default QuestionOptions;
