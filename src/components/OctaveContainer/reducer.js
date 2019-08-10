import { DECREMENT_OCTAVE , INCREMENT_OCTAVE } from "./actions";

const initialState = {
  octave: 5,
};

export default function(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case DECREMENT_OCTAVE:
      return {
        ...state,
        octave: state.octave - 1,
      };
    case INCREMENT_OCTAVE:
      return {
        ...state,
        octave: state.octave + 1,
      };
    default:
      return state;
  }
}
