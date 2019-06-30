import { combineReducers } from "redux";
import octaveContainer from "./components/OctaveContainer/reducer";
import synthesizer from "./reducer";

const rootReducer = combineReducers({
  octaveContainer,
  synthesizer,
});

export default rootReducer;
