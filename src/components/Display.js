import React, { useState, useEffect } from "react";

const Display = ({ equationProp, propNumClicked }) => {
  //const [equation, setEquation] = equationProp;
  return (
    <div id="display" className="dsp">
      {propNumClicked}
    </div>
  );
};

export default Display;
