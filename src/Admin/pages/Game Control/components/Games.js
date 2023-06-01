import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import football from "../img/football.png";
import Question from "./Question";
import { GamesState } from "../../../Contexts/GamesContext";
import AddQuestion from "./AddQuestion";
import { ModalState } from "../../../Contexts/ModalContext";

function Games({ uid }) {
  const { setShowModal, setShowComponent } = ModalState();
  const { GamesData, Questions } = GamesState();
  const Game = GamesData.games.filter((i) => {
    return i.id == uid;
  })[0];
  // console.log(Game);

  return (
    <div>
      <div className="bg-gray-400 pt-3 px-3">
        <div className=" [&>button]:text-white [&>button]:py-1 [&>button]:px-3 [&>button]:rounded bg-green-500 flex items-center justify-between px-6 py-1 rounded-tl-md rounded-tr-md">
          {" "}
          <p>(Running)</p>
          <input type="text" className="h-6 bg-white rounded" />
          <input type="number" className="h-6 bg-white rounded" />
          <button className="bg-orange-500">Showing</button>
          <button className="bg-green-800">Save</button>
          <button className="bg-orange-500">time-on</button>
          <button className="bg-orange-700">
            <a href="#">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              Enter
            </a>
          </button>{" "}
        </div>
      </div>
      <div className="font-bold [&>*]:mx-5 whitespace-nowrap flex justify-between items-center overflow-x-scroll  py-2 bg-green-800 text-white">
        <img
          src={football}
          alt=""
          className="w-10 h-10 border border-white p-1"
        />
        <span>
          {Game.team1} {"< >"} {Game.team2}
        </span>{" "}
        ||
        <span>{Game.shortDescription}</span>||
        <span>{new Date(Game.startingDate).toLocaleString()}</span>||
        <span>{new Date(Game.endingDate).toLocaleString()}</span>
        <span
          className="p-2 bg-orange-500 rounded-md"
          onClick={() => {
            setShowModal(true);
            setShowComponent(<AddQuestion id={uid} />);
          }}
        >
          Add
        </span>
        <span className="p-2 bg-orange-500 rounded-md">Edit</span>
        <span className="p-2 bg-orange-500 rounded-md">L-Ques</span>
        <span className="p-2 bg-orange-500 rounded-md">Show</span>
        <span className="p-2 bg-orange-500 rounded-md">Bet</span>
        <span className="p-2 bg-orange-500 rounded-md">Close</span>
        <span className="p-2 bg-orange-500 rounded-md">Status</span>
        <span className="p-2 bg-orange-500 rounded-md">Area-Hide</span>
        <span className="p-2 bg-orange-500 rounded-md">Hidden Question</span>
        <span>( 0, 0$)</span>
        <span>(0)</span>
        <span>( admin@super.com)</span>{" "}
      </div>
      <div>
        {/* Questions.questions.map(i)=>{
          if (i.id==uid){
            return (<Question/>)
          }
        }  */}
        {Questions.questions.map((i) => {
          if (i.id == uid) {
            return (
              <Question
                key={i.uid}
                question={i}
                question_title={i.question}
                questionOptions={i.options}
              />
            );
          }
        })}
        {/* <Question />
        <Question />
        <Question />
        <Question />
        <Question /> */}
      </div>
    </div>
  );
}

export default Games;
