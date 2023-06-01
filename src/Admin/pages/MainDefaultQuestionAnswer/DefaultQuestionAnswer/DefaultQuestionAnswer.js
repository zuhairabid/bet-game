import React, { useState } from "react";

function DefaultQuestionAnswer() {
  const [show, setSHow] = useState(false);
  return (
    <div>
      <div className="bg-white p-2 m-2">
        <button
          onClick={() => {
            setSHow(!show);
          }}
          className=" bg-gray-200 text-gray-700   px-1 my-[2px] admin-game-btn shadow-lg undefined "
          type="button"
          style={{
            transition: "all 0.1s ease 0s",
            width: "auto",
            height: "auto",
          }}
        >
          {show ? "SHow" : "Hide"}
        </button>
        {show ? (
          <div className="bg-white p-2 m-2">
            <button
              className="bg-admin-primary text-white   px-1 my-[2px] admin-game-btn shadow-lg undefined "
              type="button"
              style={{
                transition: "all 0.1s ease 0s",
                width: "auto",
                height: "auto",
              }}
            >
              Show
            </button>
            <div className="bg-primary text-white flex items-center p-2 mt-1 rounded text-sm">
              <span className="w-[120px] ml-2">Game Name</span>
              <select
                required=""
                name="game_name"
                className="block w-full p-2 bg-transparent rounded appearance-none focus:outline-none"
              >
                <option value="">--- Select ---</option>
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
            <form>
              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
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
                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
              >
                Submit
              </button>
            </form>
            <div>
              <div className="bg-white px-2">
                <div>
                  <div className="overflow-scroll  border border-admin-primary/20 shadow rounded">
                    <table className="min-w-full whitespace-nowrap text-center divide-y divide-gray-200 table-striped ">
                      <thead className="text-center bg-admin-primary/90 text-white">
                        <tr>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 p-4 w-4">
                            #
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Game Name
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Question
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Answers
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            actions
                          </td>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-admin-primary odd-bg-gray">
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            1<input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            cricket
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            To Win The Toss
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                A (1.91)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                B (1.91)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            2<input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            cricket
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            To Win The Match
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                A (1)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                B. (1)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            3<input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Toss / Match
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal" />
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            4<input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            1st Innings Score
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            5<input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            1st Innings Score
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal" />
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            6<input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Match Run
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            7<input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Match Sixs
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            8<input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Sixs -------- [ 1 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            9<input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Sixs -------- [ 2 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            10
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Most Match Sixs
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                1 (1)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Tie (5.55)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                2 (1)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            11
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Match Fours
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            12
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Fours -------- [ 1 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            13
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Fours -------- [ 2 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            14
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Most Match Fours
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                1 (1)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Tie (7.77)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                2 (1)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            15
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Match Boundaries
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            16
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Boundaries -------- [ 1 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            17
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Boundaries -------- [ 2 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            18
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Highest Individual Score
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            19
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Highest Individual Score -------- [ 1 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            20
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Highest Individual Score -------- [ 2 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            21
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            A Fifty Be Score In Match
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Yes (1)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                No (1)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            22
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Opening Partnership
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            23
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Opening Partnership -------- [ 1 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            24
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Opening Partnership -------- [ 2 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            25
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Highest Opening Partnership
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                1 (1)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Tie (10)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                2 (1)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            26
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Duck
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            27
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Extra Runs
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            28
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Extra Runs -------- [ 1 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            29
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Extra Runs -------- [ 2 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            30
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Wide
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            31
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Match Wickets
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            32
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Caught Out in Match
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            33
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Caught Out -------- [ 1 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            34
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Caught Out -------- [ 2 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            35
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Highest Single Over Run
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            36
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Highest 1st Over Runs
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                1 (1)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Tie (2)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                2 (1)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            37
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            1st Over Boundary -------- [ 1 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Yes (1)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                No (2)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            38
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            1st Over Boundary -------- [ 2 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Yes (1)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                No (2)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            39
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Highest 1st 6 over Runs
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                1 (1)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Tie (11)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                2 (1)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            40
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Most Run Out ( Batting )
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                1 (2.8)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                Tie (1.45)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                              <li className="my-2">
                                2 (2.8)
                                <input type="checkbox" defaultChecked="" />
                                <button
                                  type="submit"
                                  className="text-white rounded bg-red-500 p-2 "
                                >
                                  delete
                                </button>
                              </li>
                            </ol>
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            41
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            football
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Full Time Result
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal" />
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            42
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            football
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Full Time Result
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal" />
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            43
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            football
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Half Time Result
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal" />
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            44
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            football
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Goal
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal" />
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            45
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            football
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Goal
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal" />
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            46
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            football
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Goal
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal" />
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            47
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            football
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Both Team To Score
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal" />
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            48
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            football
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Card
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal" />
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            49
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            football
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Corner
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal" />
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            50
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            football
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            1st Team Score
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal" />
                            <form className="flex">
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Answer
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="text"
                                  step="any"
                                  name="answer"
                                  placeholder="New Answer"
                                  defaultValue=""
                                />
                              </div>
                              <div className="bg-primary text-white  flex items-center p-2 text-sm undefined">
                                <span className="w-[120px] ml-2 whitespace-pre-wrap text-left">
                                  New Rate
                                </span>
                                <input
                                  className="w-full p-1 bg-transparent focus:outline-none "
                                  type="number"
                                  step="any"
                                  name="rate"
                                  placeholder="New Rate"
                                  defaultValue=""
                                />
                              </div>
                              <button
                                type="submit"
                                className="flex justify-center items-center w-full min-w-[80px] h-10 font-bold transition duration-300 bg-primary rounded hover:bg-primary/70 text-theme-light "
                              >
                                Submit
                              </button>
                            </form>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex-center-center pb-10" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="bg-green-800 text-white flex items-center p-2 mt-1 rounded text-sm">
              <span className="w-[120px] ml-2">Game Name</span>
              <select
                required=""
                name="game_name"
                className="block w-full p-2 bg-transparent rounded appearance-none focus:outline-none"
              >
                <option value="">--- Select ---</option>
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
            <div>
              <div className="bg-white px-2">
                <div>
                  <div className="overflow-scroll  border border-admin-primary/20 shadow rounded">
                    <table className="min-w-full whitespace-nowrap text-center divide-y divide-gray-200 table-striped ">
                      <thead className="text-center bg-orange-950/90 text-white">
                        <tr>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 p-4 w-4">
                            #
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Game Name
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Question
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Answers
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            actions
                          </td>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-admin-primary odd-bg-gray">
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            1<input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            cricket
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            To Win The Toss
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                A (1.91)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                B (1.91)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            2<input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            cricket
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            To Win The Match
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                A (1)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                B. (1)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            3<input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Toss / Match
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            4<input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            1st Innings Score
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            5<input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            1st Innings Score
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            6<input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Match Run
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            7<input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Match Sixs
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            8<input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Sixs -------- [ 1 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            9<input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Sixs -------- [ 2 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            10
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Most Match Sixs
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                1 (1)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Tie (5.55)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                2 (1)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            11
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Match Fours
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            12
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Fours -------- [ 1 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            13
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Fours -------- [ 2 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            14
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Most Match Fours
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                1 (1)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Tie (7.77)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                2 (1)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            15
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Match Boundaries
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            16
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Boundaries -------- [ 1 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            17
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Boundaries -------- [ 2 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            18
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Highest Individual Score
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            19
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Highest Individual Score -------- [ 1 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            20
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Highest Individual Score -------- [ 2 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            21
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            A Fifty Be Score In Match
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Yes (1)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                No (1)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            22
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Opening Partnership
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            23
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Opening Partnership -------- [ 1 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            24
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Opening Partnership -------- [ 2 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            25
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Highest Opening Partnership
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                1 (1)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Tie (10)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                2 (1)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            26
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Duck
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            27
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Extra Runs
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            28
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Extra Runs -------- [ 1 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            29
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Extra Runs -------- [ 2 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            30
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Wide
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            31
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Match Wickets
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            32
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Caught Out in Match
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            33
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Caught Out -------- [ 1 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            34
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Caught Out -------- [ 2 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            35
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Highest Single Over Run
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Over (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Under (1.81)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            36
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Highest 1st Over Runs
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                1 (1)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Tie (2)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                2 (1)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            37
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            1st Over Boundary -------- [ 1 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Yes (1)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                No (2)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            38
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            1st Over Boundary -------- [ 2 ]
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                Yes (1)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                No (2)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            39
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Highest 1st 6 over Runs
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                1 (1)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Tie (11)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                2 (1)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            40
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Cricket Others Options
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Most Run Out ( Batting )
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal">
                              <li className="my-2">
                                1 (2.8)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                Tie (1.45)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                              <li className="my-2">
                                2 (2.8)
                                <input type="checkbox" defaultChecked="" />
                              </li>
                            </ol>
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            41
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            football
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Full Time Result
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            42
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            football
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Full Time Result
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            43
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            football
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Half Time Result
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            44
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            football
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Goal
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            45
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            football
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Goal
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            46
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            football
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Goal
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            47
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            football
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Both Team To Score
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            48
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            football
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Card
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            49
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            football
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            Total Corner
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            50
                            <input type="checkbox" defaultChecked="" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            football
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            1st Team Score
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <ol className="list-decimal" />
                          </td>
                          <td className="px-5 text-xs font-medium tracking-wider   md:px-1 ">
                            <button
                              type="submit"
                              className="text-white rounded bg-red-500 p-2 "
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="flex-center-center pb-10" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DefaultQuestionAnswer;
