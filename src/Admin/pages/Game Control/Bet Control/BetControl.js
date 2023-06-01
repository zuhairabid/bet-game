import React from "react";
import Games from "../components/Games";
import { GamesState } from "../../../Contexts/GamesContext";

function BetControl() {
  const { GamesData } = GamesState();
  // console.log(GamesData);
  return (
    <div>
      <div>
        <div className="bg-green-800 text-white font-bold p-1 flex justify-between rounded">
          <p>Live Games</p>
          <p>^</p>
        </div>
        <div>
          {GamesData.games
            ? GamesData.games.map((i) => {
                return <Games uid={i.id} />;
              })
            : ""}
          {/* <Games />
          <Games />
          <Games />
          <Games /> */}
        </div>
      </div>
      <div>
        <div>Upcoming Games</div>
        <div></div>
      </div>
    </div>
  );
}

export default BetControl;
