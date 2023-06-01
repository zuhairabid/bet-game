import React, { useState } from "react";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BetControl from "./Bet Control/BetControl";
import ModalAnimated from "../../Components/ModalAnimated";
import Settings from "../Settings/Settings";
import { ModalState } from "../../Contexts/ModalContext";
import Notice from "../Notice/Notice";
import NewGame from "./components/NewGame";

function GameControl() {
  const [newGameModal, setNewGameModal] = useState(false);
  const { setShowModal, showComponent, setShowComponent } = ModalState();

  return (
    <div>
      <ModalAnimated Component={<Settings />} showModal={newGameModal} />
      <div className="py-2 flex items-center justify-around bg-fuchsia-700 text-white">
        <p className="text-3xl">Bet Control</p>
        <div className="bg-green-500 p-1 rounded text-sm">
          {" "}
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Hidden Bet Control
        </div>
      </div>
      <div className="bg-gray-200 px-2">
        <div>dashboard</div>
        <div className="bg-white p-2 rounded-md text-white">
          <button
            className="bg-orange-600 p-2 rounded-md"
            onClick={() => {
              setShowModal(true);
              setShowComponent(<NewGame />);
            }}
          >
            + Game
          </button>
        </div>
        <div>search</div>
        <div>date</div>

        <BetControl />
      </div>
    </div>
  );
}

export default GameControl;
