import React from "react";
import { usePlayer } from "../../hooks/usePlayer";

const Player = () => {
  let { togglePlayAndPause } = usePlayer();
  return (
    <div className="flex justify-center items-center h-[10%]">
      <button
        onClick={() => togglePlayAndPause()}
        className="bg-green-500 hover:bg-green-600 p-7 rounded-full shadow-lg transition"
      >
        ▶
      </button>
    </div>
  );
};

export default Player;