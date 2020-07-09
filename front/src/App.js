import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  function clickHi() {
    return axios.get("http://localhost:4040/").then(hi);
  }
  function hi(res) {
    console.log(res);
    console.log("dd");
  }
  return (
    <div className="App">
      <button id="hi" onClick={clickHi}>
        안뇽
      </button>
    </div>
  );
}

export default App;
