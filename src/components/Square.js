import React from "react";

import "./Square.css";

const Square = ({ value }) => {
  console.log(value);
  return <div className="square">Square Value: {value}</div>;
};

export default Square;
