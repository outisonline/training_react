import React from "react";
import { SquareValue } from "../interface";

interface SquareProps {
  value: SquareValue;
  onClick: () => void;
}

function Square(props: SquareProps) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
