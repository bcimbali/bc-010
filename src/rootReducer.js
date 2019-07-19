import { combineReducers } from "redux";
import octave from "./components/OctaveContainer/reducer";
// import synthesizer from "./reducer";
import oscillator from "./components/OscillatorBtn/reducer";
import { envelope, filterParams } from "./components/VerticalSlider/reducer";

const synthesizer = combineReducers({
  oscillator,
  envelope,
});

const rootReducer = combineReducers({
  octave,
  synthesizer,
  filterParams,
});

export default rootReducer;
