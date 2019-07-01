import { TOGGLE_OSCILLATORS, UPDATE_ENVELOPE } from "./actions";

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
  const { type, oscType, envelopeName, envelopeValue } = action;
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
    case UPDATE_ENVELOPE:
      return {
        ...state,
        synthParams: {
          oscillator: {
            type: oscType,
          },
          envelope: {
            ...state.synthParams.envelope,
            [envelopeName]: envelopeValue,
          },
          portamento: 0.05,
        },
      };
    default:
      return state;
  }
}
