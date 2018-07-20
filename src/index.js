import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App2() {
  const gee = "vcjoo";
  let bee = "flags";
  return (
    <div>
      Hello {gee} <br />
      {1 + 1 === 2 ? "1" : "2"} <br />
      {bee}
      abc edf
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App2 />, rootElement);
