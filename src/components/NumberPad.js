import React, {
  useState,
  useEffect,
  setEquation,
  equation,
  useRef
} from "react";
import NumberGrid from "./NumberGrid";

const NumberPad = ({ padId, padValue, secondFunctionProp }) => {
  const num = padValue;
  const onClick = secondFunctionProp;
  const padRef = useRef();

  // return <div className="pad">{num} pad test</div>;
  return (
    <div
      id={padId}
      className="num-button"
      value={padValue}
      onClick={onClick}
      ref={padRef}
    >
      {num}
    </div>
  );
};

export default NumberPad;
