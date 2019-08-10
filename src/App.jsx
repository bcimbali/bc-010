// @flow
import "./reset.css";
import "./App.css";
import rootReducer from "./rootReducer";

import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import OuterCasing from "./components/OuterCasing";

const middleware = [logger];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

type Props = {};
type State = {};

class App extends Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <main>
          <header className="header">bc-010</header>
          <OuterCasing key="outerCasing" />
        </main>
      </Provider>
    );
  }
}

export default App;
