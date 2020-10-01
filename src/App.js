import React, { useState, useEffect } from "react";
import NumberGrid from "./components/NumberGrid";
import Function from "./components/Function";
import Display from "./components/Display";
import Navbar from "./components/Navbar";

const App = () => {
  //const [equation, setEquation] = useState(6);
  const [buttonClicked, setButtonClicked] = useState(0); //the number at the bottom of the display screen (what you last clicked)
  const [runningEquation, setRunningEquation] = useState(""); //the equation at top of display screen

  //when number is clicked
  function clickNumber(NUM) {
    //condition in which a decimal has already been clicked
    if (NUM == "." && /\./.test(buttonClicked)) {
      return;
    } else if (buttonClicked == 0) {
      setButtonClicked(NUM.toString());
      setRunningEquation(NUM);
    } else {
      setButtonClicked(buttonClicked => {
        return buttonClicked + NUM.toString();
      });

      setRunningEquation(runningEquation => {
        return runningEquation + NUM.toString();
      });
    }
  }

  //when math function is clicked
  function clickFunc(symbol, mathSymbol) {
    //var x = runningEquation.length-1;

    //if a function is clicked and it is not "-"
    if (mathSymbol != "-") {
      //if a function is clicked and it is not "-", if the last character in equation IS function
      if (
        runningEquation[runningEquation.length - 1] == "*" ||
        runningEquation[runningEquation.length - 1] == "+" ||
        runningEquation[runningEquation.length - 1] == "-" ||
        runningEquation[runningEquation.length - 1] == "/"
      ) {
        //then replace the last character with the function that was just clicked
        if (
          runningEquation[runningEquation.length - 2] == "*" ||
          runningEquation[runningEquation.length - 2] == "+" ||
          runningEquation[runningEquation.length - 2] == "-" ||
          runningEquation[runningEquation.length - 2] == "/"
        ) {
          setRunningEquation(
            runningEquation =>
              runningEquation.substring(0, runningEquation.length - 2) +
              mathSymbol
          );
          setButtonClicked(symbol);
        } else {
          setRunningEquation(
            runningEquation =>
              runningEquation.substring(0, runningEquation.length - 1) +
              mathSymbol
          );
          setButtonClicked(symbol);
        }
      }

      //else if clicked is not "-" but previous char was not a function, just add this to end of running equation
      else {
        setButtonClicked(symbol);
        setRunningEquation(runningEquation => {
          return runningEquation + mathSymbol.toString();
        });
      }

      //if clicked IS "-" and previous char was "-" don't do anything
    } else if (
      mathSymbol == "-" &&
      runningEquation[runningEquation.length - 1] == "-"
    ) {
      return;
    }

    //if clicked IS "-", and previous was not "-" just add this to the end of the running equation
    else {
      setButtonClicked(symbol);
      setRunningEquation(runningEquation => {
        return runningEquation + mathSymbol.toString();
      });
    }
  }

  //when AC is clicked
  function clear() {
    setButtonClicked(0);
    setRunningEquation("");
  }

  //when equals is clicked
  function equals() {
    setButtonClicked(eval(runningEquation));
    setRunningEquation(runningEquation => eval(runningEquation));
  }

  return (
    <div className="App">
      <Navbar />
      <div id="whiteBg">
        <div id="calc-wrapper">
          <div id="screen">
            <div id="forDecimal">{runningEquation}</div>
            <Display
              //equationProp={[equation, setEquation]}
              propNumClicked={buttonClicked}
            />
          </div>
          <div
            id="clear"
            onClick={() => {
              clear();
            }}
          >
            AC
          </div>
          <NumberGrid className="num-grid-class" clickTestProp1={clickNumber} />

          <Function
            funcIdProp="divide"
            funcSymbolProp="/"
            mathSymbolProp="/"
            clickFuncProp={clickFunc}
          />
          <Function
            funcIdProp="multiply"
            funcSymbolProp="X"
            mathSymbolProp="*"
            clickFuncProp={clickFunc}
          />
          <Function
            funcIdProp="subtract"
            funcSymbolProp="-"
            mathSymbolProp="-"
            clickFuncProp={clickFunc}
          />
          <Function
            funcIdProp="add"
            funcSymbolProp="+"
            mathSymbolProp="+"
            clickFuncProp={clickFunc}
          />
          <div
            id="equals"
            onClick={() => {
              equals();
            }}
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
