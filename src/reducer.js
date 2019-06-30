import { TOGGLE_OSCILLATORS } from "./actions";

const initialState = {
  synthParams: {
    oscillator: {
      type: "sawtooth",
    },
    envelope: {
      attack: 0.0001,
      decay: 0.2,
      sustain: 0.2,
      release: 1,
    },
    portamento: 0.05,
  },
};

export default function(state = initialState, action) {
  const { type, oscType } = action;
  switch (type) {
    case TOGGLE_OSCILLATORS:
      return {
        ...state,
        synthParams: {
          oscillator: {
            type: oscType,
          },
          envelope: {
            attack: 0.0001,
            decay: 0.2,
            sustain: 0.2,
            release: 1,
          },
          portamento: 0.05,
        },
      };
    default:
      return state;
  }
}
