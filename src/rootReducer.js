import { combineReducers } from "redux";
import octaveContainer from "./components/OctaveContainer/reducer";
import synthesizer from "./reducer";
import oscillator from "./components/OscillatorBtn/reducer";
import envelope from "./components/VerticalSlider/reducer";

const synthReducer = combineReducers({
  oscillator,
  envelope,
});

const rootReducer = combineReducers({
  octaveContainer,
  synthReducer,
});

export default rootReducer;
