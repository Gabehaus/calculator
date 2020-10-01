import React, { useState, useEffect } from "react";
//import { Decimal } from "decimal.js";

const Function = ({
  funcIdProp,
  funcSymbolProp,
  mathSymbolProp,
  clickFuncProp
}) => {
  //var Decimal = require("decimal.js");
  // var x = new Decimal(0.3);
  // return <div className="pad">{num} pad test</div>;
  const symbol = funcSymbolProp;
  const mathSymbol = mathSymbolProp;

  function callClickFunc(symbol, mathSymbol) {
    clickFuncProp(symbol, mathSymbol);
  }

  return (
    <div
      id={funcIdProp}
      className="func-button"
      value={symbol}
      onClick={() => {
        callClickFunc(symbol, mathSymbol);
      }}
    >
      {/*{x.minus(0.1).toString()} */}
      {symbol}
    </div>
  );
};

export default Function;
