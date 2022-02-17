import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [show, setShow] = useState(false);

  const showPara = () => {
    setShow((show) => !show);
  };

  return (
    <>
      <div id="main">// Do not alter the main div</div>
      <button id="click" onClick={showPara}>
        Click
      </button>
      {show && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )}
    </>
  );
}

export default App;
