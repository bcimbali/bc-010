import { TOGGLE_OSCILLATORS} from "./actions";

const initialState = {
  type: "sawtooth",
};

export default function(state = initialState, action) {
  const { type, oscType } = action;
  console.log('oscType in reducer of OscillatorBtn: ', oscType);
  switch (type) {
    case TOGGLE_OSCILLATORS:
      return {
        ...state,
        type: oscType,
      };
    default:
      return state;
  }
}
