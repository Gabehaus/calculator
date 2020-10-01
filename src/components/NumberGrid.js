import React from "react";
import NumberPad from "./NumberPad";

const NumberGrid = ({ clickTestProp1, indProp }) => {
  const numArray = [
    { sym: 7, name: "seven" },
    { sym: 8, name: "eight" },
    { sym: 9, name: "nine" },
    { sym: 4, name: "four" },
    { sym: 5, name: "five" },
    { sym: 6, name: "six" },
    { sym: 1, name: "one" },
    { sym: 2, name: "two" },
    { sym: 3, name: "three" },
    { sym: 0, name: "zero" },
    { sym: ".", name: "decimal" }
  ];

  //const clickTestProp1b = clickTestProp1;

  function secondFunction(num) {
    clickTestProp1(num);
  }

  var numArrayPainted;

  numArrayPainted = numArray.map((elem, i) => {
    return (
      <NumberPad
        key={elem.sym}
        padId={elem.name}
        padValue={elem.sym}
        secondFunctionProp={() => {
          secondFunction(elem.sym);
        }}
      />
    );
  });

  return (
    <div id="num-grid" className="num-grid">
      {numArrayPainted}
    </div>
  );
};

export default NumberGrid;
