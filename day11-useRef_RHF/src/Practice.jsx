import React, { useRef } from "react";

const Practice = () => {
  let audioRef = useRef({});

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1>Practice</h1>

      <audio ref={audioRef} src="/gasoline_music.mp3"></audio>
      <button onClick={(e) => audioRef.current.play()}>Play</button>
      <button onClick={(e) => audioRef.current.pause()}>pause</button>
    </div>
  );
};

export default Practice;