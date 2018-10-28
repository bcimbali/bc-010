// @flow
import "./index.css";

import App from "./App.jsx";
import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

const root = document.getElementById("root");

if (root !== null) {
  ReactDOM.render(<App />, root);
}

registerServiceWorker();
