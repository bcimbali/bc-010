import { combineReducers } from "redux";
import octaveContainer from "./components/OctaveContainer/reducer";

const rootReducer = combineReducers({
  octaveContainer,
});

export default rootReducer;
