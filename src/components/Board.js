import React, { useState } from "react";

import Square from "./Square";
import "./Board.css";

const Board = () => {
  const p1 = "X";
  const p2 = "O";
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [player, setPlayer] = useState(p1);
  const [gameState, setGameState] = useState("playing");

  return (
    <div>
      {board.map((row, rowIdx) => (
        <div className="flex" key={rowIdx}>
          {row.map((item, squareIdx) => (
            <Square key={squareIdx} value={item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
