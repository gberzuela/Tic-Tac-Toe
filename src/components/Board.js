import React from "react";

import Square from "./Square";

const Board = ({ board, gameState, tryMove }) => {
  return (
    <>
      {board.map((row, rowIdx) => (
        <div className="flex" key={rowIdx}>
          {row.map((item, colIdx) => (
            <Square
              key={colIdx}
              value={item}
              onClick={() => {
                if (gameState === "playing") {
                  tryMove([rowIdx, colIdx]);
                }
              }}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default Board;
