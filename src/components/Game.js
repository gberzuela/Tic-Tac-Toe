import React, { useState } from "react";

import Board from "./Board";
import "./Game.css";

const Game = () => {
  const [message, setMessage] = useState("");
  const [turnMessage, setTurnMessage] = useState("Turn: X");

  return (
    <div className="flex jcc aic main-container">
      <h1>Tic Tac Toe</h1>
      <Board setTurnMessage={setTurnMessage} setMessage={setMessage} />
      <div className="flex jcsb msg-container">
        {turnMessage && <h3>{turnMessage}</h3>}
        {message && <h3>{message}</h3>}
      </div>
    </div>
  );
};

export default Game;
