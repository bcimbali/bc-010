import { UPDATE_ENVELOPE } from "./actions";

const initialState = {
  attack: 0.0001,
  decay: 0.2,
  sustain: 0.2,
  release: 1,
  portamento: 0.05,
};

export default function(state = initialState, action) {
  const { type, envelopeName, envelopeValue, typeOfParams } = action;
  switch (type) {
    case UPDATE_ENVELOPE:
      if (typeOfParams === "synthParams") {
        return {
          ...state,
          [envelopeName]: envelopeValue,
        };
      }
      // if (typeOfParams === "filterParams") {
      //   return {
      //     ...state,
      //     synthReducer: {
      //       ...state.synthReducer,
      //       envelope: {
      //         [envelopeName]: envelopeValue,
      //       },
      //     },
      //   };
      // }
      // return state;
      break;
    default:
      return state;
  }
}
