import React, { useEffect, useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";
import { v4 as uuid } from "uuid";
import { GamesState } from "../../../Contexts/GamesContext";

function NewGame() {
  const [GamesData, setGamesData] = useState(GamesState().GamesData);

  // const [GamesData, setGamesData] = useState({});
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [gameType, setGameType] = useState("");
  const [gameStatus, setGameStatus] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const setGame = async () => {
    let updatedGameData = GamesData.games;
    const inputData = {
      id: uuid(),
      team1: team1,
      team2: team2,
      shortDescription: shortDescription,
      gameType: gameType,
      gameStatus: gameStatus,
      startingDate: startingDate,
      endingDate: endingDate,
    };
    if (GamesData.games) {
      if (!GamesData.games.length <= 0) {
        updatedGameData = GamesData.games;
        updatedGameData.push(inputData);
      }
    }

    setGamesData({
      games:
        GamesData.games && !GamesData.games.length <= 0
          ? updatedGameData
          : [inputData],
    });
    await setDoc(doc(db, "admin", "games", "show", "live"), {
      games:
        GamesData.games && !GamesData.games.length <= 0
          ? updatedGameData
          : [inputData],
    });
  };
  useEffect(() => {
    // console.log(GamesData);
  });

  return (
    <div>
      <div className="bg-orange-900 text-white text-3xl p-2">Add Game</div>
      <div className="p-2 space-y-2 [&>*]:rounded-md [&>*]:p-2 text-white">
        <div className="bg-green-800 [&>div>p]:w-20 [&>div>input]:bg-transparent">
          <div className="flex">
            <p>Team 1</p>
            <input
              type="text"
              placeholder="Team 1"
              onInput={(e) => {
                setTeam1(e.target.value);
              }}
            />
          </div>
          <div className="flex">
            <p>Team 2</p>
            <input
              type="text"
              placeholder="Team 2"
              onInput={(e) => {
                setTeam2(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="bg-green-800 [&>div>p]:mr-5 [&>div>input]:bg-transparent">
          <div className="flex">
            <p>Short Description</p>
            <input
              onInput={(e) => {
                setShortDescription(e.target.value);
              }}
              type="text"
              placeholder="Short Description"
            />
          </div>
        </div>

        <div className="flex items-center bg-green-800">
          <p className="w-24">Game Type</p>
          <select
            onInput={(e) => {
              setGameType(e.target.value);
            }}
            required=""
            name="game_type_id"
            class="block w-full p-2 bg-transparent rounded appearance-none focus:outline-none"
          >
            <option value="" disabled="">
              --- Select ---
            </option>
            <option value="1" class="text-gray-800">
              cricket{" "}
            </option>
            <option value="2" class="text-gray-800">
              football{" "}
            </option>
            <option value="3" class="text-gray-800">
              Cricket Others Options (cricket)
            </option>
            <option value="4" class="text-gray-800">
              T10 Cricket (cricket)
            </option>
            <option value="5" class="text-gray-800">
              Womens Cricket (cricket)
            </option>
            <option value="6" class="text-gray-800">
              LPL (cricket)
            </option>
            <option value="7" class="text-gray-800">
              MLC (cricket)
            </option>
            <option value="8" class="text-gray-800">
              T20 Blast (cricket)
            </option>
            <option value="9" class="text-gray-800">
              Table Tennis{" "}
            </option>
            <option value="10" class="text-gray-800">
              Basketball{" "}
            </option>
            <option value="11" class="text-gray-800">
              Badminton{" "}
            </option>
          </select>
        </div>
        <div className="flex items-center bg-green-800">
          <p className="w-24">Game Status</p>
          <select
            onInput={(e) => {
              setGameStatus(e.target.value);
            }}
            required=""
            name="status"
            class="block w-full p-2 bg-transparent rounded appearance-none focus:outline-none"
          >
            <option value="" disabled="">
              --- Select ---
            </option>
            <option class="text-gray-800" value="0">
              Live
            </option>
            <option class="text-gray-800" value="1">
              Upcoming
            </option>
          </select>
        </div>

        <div className="bg-green-800 ">
          <div className="flex">
            <div class="bg-primary text-white  flex items-center p-2 text-sm rounded-t mt-1">
              <span class="w-[120px] ml-2 whitespace-pre-wrap text-left">
                Starting Time
              </span>
              <input
                onInput={(e) => {
                  setStartingDate(e.target.value);
                }}
                class="w-full p-1 bg-transparent focus:outline-none "
                type="datetime-local"
                step="any"
                name="starting_time"
                placeholder="Starting Time"
              />
            </div>
          </div>
          <div className="flex">
            <div class="bg-primary text-white  flex items-center p-2 text-sm mb-4 rounded-b">
              <span class="w-[120px] ml-2 whitespace-pre-wrap text-left">
                Ending Time
              </span>
              <input
                onInput={(e) => {
                  setEndingDate(e.target.value);
                }}
                class="w-full p-1 bg-transparent focus:outline-none "
                type="datetime-local"
                step="any"
                name="ending_time"
                placeholder="Ending Time"
              />
            </div>
          </div>
        </div>

        <button
          className="bg-green-800 text-center font-bold p-3 w-full"
          onClick={setGame}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default NewGame;
