import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const btnRender = () => {
    return (
      <p id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>
    );
  };
  return (
    <>
      <div id="main">// Do not alter the main div</div>
      <button id="click" onClick={btnRender}>
        Click
      </button>
    </>
  );
}

export default App;
