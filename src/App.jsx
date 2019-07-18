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
import Tone from "tone";
import autoBind from "react-autobind";

const middleware = [];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

type Props = {};

type State = {};

class App extends Component<Props, State> {
  constructor() {
    super();
    autoBind(this);
  }

  render() {
    return (
      <Provider store={store}>
        <main>
          <header className="header">bc-010</header>
          <OuterCasing
            // adjustOctave={this.adjustOctave}
            // envelopeSliderChange={this.envelopeSliderChange}
            // filterParams={filterParams}
            key="outerCasing"
            // keyPress={this.keyPress}
            // octave={octave}
            // synthParams={synthParams}
            // toggleOscillator={this.toggleOscillator}
          />
        </main>
      </Provider>
    );
  }
}

export default App;
