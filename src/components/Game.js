import React, { useEffect, useState } from "react";

import Board from "./Board";
import "./Game.css";

const Game = () => {
  const p1 = "X";
  const p2 = "O";
  const [message, setMessage] = useState("");
  const [turnMessage, setTurnMessage] = useState("Turn: X");
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const [player, setPlayer] = useState(p1);
  const [gameState, setGameState] = useState("playing");
  const [winner, setWinner] = useState("");

  const tryMove = ([row, col]) => {
    if (!board[row][col]) {
      board[row][col] = player;
      checkBoard();
      setPlayer(player === p1 ? p2 : p1);
      setMessage("");
    } else setMessage("Invalid move");
  };

  const checkBoard = () => {
    // Rows && Cols
    for (let i = 0; i < board.length; i++) {
      const rowValues = [board[i][0], board[i][1], board[i][2]];
      const colValues = [board[0][i], board[1][i], board[2][i]];

      checkValues(rowValues);
      checkValues(colValues);
    }

    // Diagonals
    if (board[1][1]) {
      checkValues([board[0][0], board[1][1], board[2][2]]);
      checkValues([board[0][2], board[1][1], board[2][0]]);
    }
  };

  const checkValues = (values) => {
    const [val1, val2, val3] = values;

    if (val1) {
      if (val1 === val2 && val2 === val3) {
        setGameState("winner");
        setWinner(player);
        return;
      }
    }
  };

  const reset = () => {
    setMessage("");
    setTurnMessage("Turn: X");
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setPlayer(p1);
    setGameState("playing");
    setWinner("");
  };

  useEffect(() => {
    if (gameState === "winner") setMessage(`${winner} Won!`);
    if (gameState === "draw") setMessage("It's a draw!");
  }, [gameState]);

  useEffect(() => {
    setTurnMessage(`Turn: ${player}`);
  }, [player]);

  return (
    <div className="flex jcc aic main-container">
      <h1>Tic Tac Toe</h1>
      <Board board={board} gameState={gameState} tryMove={tryMove} />
      <div className="flex jcsb msg-container">
        {turnMessage && <h3>{turnMessage}</h3>}
        {message && <h3>{message}</h3>}
      </div>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};

export default Game;
