import React from "react";
import { render } from "react-dom";
import { Game } from "./components";

const App = () => {
  return (
    <div className="flex jcc aic main-container">
      <h1>Tic Tac Toe</h1>
      <Game />
    </div>
  );
};

render(<App />, document.getElementById("app"));
